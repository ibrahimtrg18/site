import { NextRequest, NextResponse } from "next/server";
import { simpleGit } from "simple-git";

import { loadStudioConfig, REPO_ROOT, resolveRepoPath } from "@/studio/config";
import { studioDisabledResponse } from "@/studio/guard";

const git = simpleGit(REPO_ROOT);

/** Paths studio is allowed to stage: configured dirs + its own config file. */
const allowedPrefixes = () => {
  const config = loadStudioConfig();

  const prefixes = Object.values(config.contentTypes).flatMap((contentType) => [
    contentType.contentDir.replace(/\/$/, "") + "/",
    contentType.assetsDir.replace(/\/$/, "") + "/",
  ]);

  return [...prefixes, "studio.config.json"];
};

const isAllowedPath = (filePath: string) =>
  allowedPrefixes().some(
    (prefix) => filePath === prefix || filePath.startsWith(prefix)
  );

export async function GET() {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const status = await git.status();

    const files = status.files
      .map((file) => ({
        path: file.path,
        status: `${file.index}${file.working_dir}`.trim(),
        publishable: isAllowedPath(file.path),
      }))
      .sort((a, b) => Number(b.publishable) - Number(a.publishable));

    return NextResponse.json({
      branch: status.current,
      ahead: status.ahead,
      behind: status.behind,
      files,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "git status failed" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const { message, paths } = (await request.json()) as {
      message?: string;
      paths?: string[];
    };

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Commit message is required" },
        { status: 400 }
      );
    }

    const status = await git.status();
    const changedPaths = status.files.map((file) => file.path);

    const toStage = (paths?.length ? paths : changedPaths).filter(
      (filePath) => isAllowedPath(filePath) && changedPaths.includes(filePath)
    );

    if (toStage.length === 0 && status.ahead === 0) {
      return NextResponse.json(
        { error: "Nothing to publish" },
        { status: 400 }
      );
    }

    // resolveRepoPath throws if a path tries to escape the repository.
    toStage.forEach((filePath) => resolveRepoPath(filePath));

    let commit = null;
    if (toStage.length > 0) {
      await git.add(toStage);
      const result = await git.commit(message.trim());
      commit = result.commit;
    }

    const branch = (await git.status()).current ?? "HEAD";
    await git.push("origin", branch);

    return NextResponse.json({ ok: true, commit, branch, pushed: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Publish failed" },
      { status: 500 }
    );
  }
}
