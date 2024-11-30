import {
  UpdatePageDocument,
  UpdatePageMutationHookResult,
  UpdatePageMutationVariables,
} from "@/generated/graphql";
import { getClient } from "@/libs/apollo/ssr";

export async function mutationUpdatePage(
  variables: Partial<UpdatePageMutationVariables>
) {
  const data = await getClient().mutate<
    UpdatePageMutationHookResult,
    Partial<UpdatePageMutationVariables>
  >({
    mutation: UpdatePageDocument,
    variables,
  });

  return data;
}
