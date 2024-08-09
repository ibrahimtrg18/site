import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  Hex: { input: any; output: any };
  Json: { input: any; output: any };
  Long: { input: any; output: any };
  RGBAHue: { input: any; output: any };
  RGBATransparency: { input: any; output: any };
  RichTextAST: { input: any; output: any };
};

export type Aggregate = {
  __typename?: "Aggregate";
  count: Scalars["Int"]["output"];
};

export type App = Entity &
  Node & {
    __typename?: "App";
    about?: Maybe<RichText>;
    avatar?: Maybe<Asset>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"]["output"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<App>;
    email?: Maybe<Scalars["String"]["output"]>;
    fullname?: Maybe<Scalars["String"]["output"]>;
    greeting?: Maybe<RichText>;
    /** List of App versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"]["output"];
    menu: Array<Menu>;
    nickname?: Maybe<Scalars["String"]["output"]>;
    phoneNumber?: Maybe<Scalars["String"]["output"]>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    social: Array<Social>;
    /** System stage field */
    stage: Stage;
    technology: Array<TechStack>;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"]["output"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
  };

export type AppAvatarArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AppCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AppDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type AppHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type AppMenuArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<MenuOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MenuWhereInput>;
};

export type AppPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AppScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AppSocialArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SocialOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<SocialWhereInput>;
};

export type AppTechnologyArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TechStackOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TechStackWhereInput>;
};

export type AppUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AppConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AppWhereUniqueInput;
};

/** A connection to a list of items. */
export type AppConnection = {
  __typename?: "AppConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AppEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AppCreateInput = {
  about?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  avatar?: InputMaybe<AssetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullname?: InputMaybe<Scalars["String"]["input"]>;
  greeting?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  menu?: InputMaybe<MenuCreateManyInlineInput>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  social?: InputMaybe<SocialCreateManyInlineInput>;
  technology?: InputMaybe<TechStackCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AppCreateManyInlineInput = {
  /** Connect multiple existing App documents */
  connect?: InputMaybe<Array<AppWhereUniqueInput>>;
  /** Create and connect multiple existing App documents */
  create?: InputMaybe<Array<AppCreateInput>>;
};

export type AppCreateOneInlineInput = {
  /** Connect one existing App document */
  connect?: InputMaybe<AppWhereUniqueInput>;
  /** Create and connect one App document */
  create?: InputMaybe<AppCreateInput>;
};

/** An edge in a connection. */
export type AppEdge = {
  __typename?: "AppEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: App;
};

/** Identifies documents */
export type AppManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AppWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AppWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AppWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AppWhereStageInput>;
  documentInStages_none?: InputMaybe<AppWhereStageInput>;
  documentInStages_some?: InputMaybe<AppWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  fullname?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  fullname_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  fullname_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  fullname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullname_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  fullname_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  fullname_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  fullname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  fullname_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  fullname_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  menu_every?: InputMaybe<MenuWhereInput>;
  menu_none?: InputMaybe<MenuWhereInput>;
  menu_some?: InputMaybe<MenuWhereInput>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  nickname_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  nickname_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  nickname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  nickname_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  nickname_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  nickname_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  nickname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  nickname_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  nickname_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  social_every?: InputMaybe<SocialWhereInput>;
  social_none?: InputMaybe<SocialWhereInput>;
  social_some?: InputMaybe<SocialWhereInput>;
  technology_every?: InputMaybe<TechStackWhereInput>;
  technology_none?: InputMaybe<TechStackWhereInput>;
  technology_some?: InputMaybe<TechStackWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AppOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  FullnameAsc = "fullname_ASC",
  FullnameDesc = "fullname_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NicknameAsc = "nickname_ASC",
  NicknameDesc = "nickname_DESC",
  PhoneNumberAsc = "phoneNumber_ASC",
  PhoneNumberDesc = "phoneNumber_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type AppUpdateInput = {
  about?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  avatar?: InputMaybe<AssetUpdateOneInlineInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullname?: InputMaybe<Scalars["String"]["input"]>;
  greeting?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  menu?: InputMaybe<MenuUpdateManyInlineInput>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  social?: InputMaybe<SocialUpdateManyInlineInput>;
  technology?: InputMaybe<TechStackUpdateManyInlineInput>;
};

export type AppUpdateManyInlineInput = {
  /** Connect multiple existing App documents */
  connect?: InputMaybe<Array<AppConnectInput>>;
  /** Create and connect multiple App documents */
  create?: InputMaybe<Array<AppCreateInput>>;
  /** Delete multiple App documents */
  delete?: InputMaybe<Array<AppWhereUniqueInput>>;
  /** Disconnect multiple App documents */
  disconnect?: InputMaybe<Array<AppWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing App documents */
  set?: InputMaybe<Array<AppWhereUniqueInput>>;
  /** Update multiple App documents */
  update?: InputMaybe<Array<AppUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple App documents */
  upsert?: InputMaybe<Array<AppUpsertWithNestedWhereUniqueInput>>;
};

export type AppUpdateManyInput = {
  about?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullname?: InputMaybe<Scalars["String"]["input"]>;
  greeting?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AppUpdateManyInput;
  /** Document search */
  where: AppWhereInput;
};

export type AppUpdateOneInlineInput = {
  /** Connect existing App document */
  connect?: InputMaybe<AppWhereUniqueInput>;
  /** Create and connect one App document */
  create?: InputMaybe<AppCreateInput>;
  /** Delete currently connected App document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected App document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single App document */
  update?: InputMaybe<AppUpdateWithNestedWhereUniqueInput>;
  /** Upsert single App document */
  upsert?: InputMaybe<AppUpsertWithNestedWhereUniqueInput>;
};

export type AppUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AppUpdateInput;
  /** Unique document search */
  where: AppWhereUniqueInput;
};

export type AppUpsertInput = {
  /** Create document if it didn't exist */
  create: AppCreateInput;
  /** Update document if it exists */
  update: AppUpdateInput;
};

export type AppUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AppUpsertInput;
  /** Unique document search */
  where: AppWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AppWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type AppWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AppWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AppWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AppWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AppWhereStageInput>;
  documentInStages_none?: InputMaybe<AppWhereStageInput>;
  documentInStages_some?: InputMaybe<AppWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  fullname?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  fullname_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  fullname_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  fullname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullname_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  fullname_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  fullname_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  fullname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  fullname_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  fullname_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  menu_every?: InputMaybe<MenuWhereInput>;
  menu_none?: InputMaybe<MenuWhereInput>;
  menu_some?: InputMaybe<MenuWhereInput>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  nickname_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  nickname_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  nickname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  nickname_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  nickname_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  nickname_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  nickname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  nickname_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  nickname_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  social_every?: InputMaybe<SocialWhereInput>;
  social_none?: InputMaybe<SocialWhereInput>;
  social_some?: InputMaybe<SocialWhereInput>;
  technology_every?: InputMaybe<TechStackWhereInput>;
  technology_none?: InputMaybe<TechStackWhereInput>;
  technology_some?: InputMaybe<TechStackWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AppWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AppWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AppWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AppWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AppWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References App record uniquely */
export type AppWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Asset system model */
export type Asset = Entity &
  Node & {
    __typename?: "Asset";
    avatarApp: Array<App>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"]["output"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Asset>;
    /** The file name */
    fileName: Scalars["String"]["output"];
    /** The file handle */
    handle: Scalars["String"]["output"];
    /** The height of the file */
    height?: Maybe<Scalars["Float"]["output"]>;
    /** List of Asset versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"]["output"];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<Asset>;
    /** The mime type of the file */
    mimeType?: Maybe<Scalars["String"]["output"]>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** The file size */
    size?: Maybe<Scalars["Float"]["output"]>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"]["output"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars["String"]["output"];
    /** The file width */
    width?: Maybe<Scalars["Float"]["output"]>;
  };

/** Asset system model */
export type AssetAvatarAppArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AppOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AppWhereInput>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: "AssetConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  avatarApp?: InputMaybe<AppCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fileName: Scalars["String"]["input"];
  handle: Scalars["String"]["input"];
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mediaProjectItem?: InputMaybe<ProjectItemCreateManyInlineInput>;
  mediaTechStack?: InputMaybe<TechStackCreateManyInlineInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fileName: Scalars["String"]["input"];
  handle: Scalars["String"]["input"];
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: "AssetEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  avatarApp_every?: InputMaybe<AppWhereInput>;
  avatarApp_none?: InputMaybe<AppWhereInput>;
  avatarApp_some?: InputMaybe<AppWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetUpdateInput = {
  avatarApp?: InputMaybe<AppUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mediaProjectItem?: InputMaybe<ProjectItemUpdateManyInlineInput>;
  mediaTechStack?: InputMaybe<TechStackUpdateManyInlineInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  avatarApp_every?: InputMaybe<AppWhereInput>;
  avatarApp_none?: InputMaybe<AppWhereInput>;
  avatarApp_some?: InputMaybe<AppWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"]["output"];
};

export type Blog = Entity &
  Node & {
    __typename?: "Blog";
    contents: Array<BlogcontentsUnion>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"]["output"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Blog>;
    /** List of Blog versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"]["output"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    title?: Maybe<Scalars["String"]["output"]>;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"]["output"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
  };

export type BlogContentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BlogCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BlogDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type BlogHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type BlogPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BlogScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type BlogUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BlogConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BlogWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogConnection = {
  __typename?: "BlogConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BlogEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlogCreateInput = {
  contents?: InputMaybe<BlogcontentsUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type BlogCreateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Create and connect multiple existing Blog documents */
  create?: InputMaybe<Array<BlogCreateInput>>;
};

export type BlogCreateOneInlineInput = {
  /** Connect one existing Blog document */
  connect?: InputMaybe<BlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create?: InputMaybe<BlogCreateInput>;
};

/** An edge in a connection. */
export type BlogEdge = {
  __typename?: "BlogEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Blog;
};

export type BlogItem = Entity & {
  __typename?: "BlogItem";
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type BlogItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BlogItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogItemConnection = {
  __typename?: "BlogItemConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BlogItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlogItemCreateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogItemCreateManyInlineInput = {
  /** Create and connect multiple existing BlogItem documents */
  create?: InputMaybe<Array<BlogItemCreateInput>>;
};

export type BlogItemCreateOneInlineInput = {
  /** Create and connect one BlogItem document */
  create?: InputMaybe<BlogItemCreateInput>;
};

export type BlogItemCreateWithPositionInput = {
  /** Document to create */
  data: BlogItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type BlogItemEdge = {
  __typename?: "BlogItemEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: BlogItem;
};

/** Identifies documents */
export type BlogItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export enum BlogItemOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type BlogItemParent = Content;

export type BlogItemParentConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
};

export type BlogItemParentCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
};

export type BlogItemParentCreateManyInlineInput = {
  /** Create and connect multiple existing BlogItemParent documents */
  create?: InputMaybe<Array<BlogItemParentCreateInput>>;
};

export type BlogItemParentCreateOneInlineInput = {
  /** Create and connect one BlogItemParent document */
  create?: InputMaybe<BlogItemParentCreateInput>;
};

export type BlogItemParentCreateWithPositionInput = {
  Content?: InputMaybe<ContentCreateWithPositionInput>;
};

export type BlogItemParentUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
};

export type BlogItemParentUpdateManyInlineInput = {
  /** Create and connect multiple BlogItemParent component instances */
  create?: InputMaybe<Array<BlogItemParentCreateWithPositionInput>>;
  /** Delete multiple BlogItemParent documents */
  delete?: InputMaybe<Array<BlogItemParentWhereUniqueInput>>;
  /** Update multiple BlogItemParent component instances */
  update?: InputMaybe<
    Array<BlogItemParentUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple BlogItemParent component instances */
  upsert?: InputMaybe<
    Array<BlogItemParentUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type BlogItemParentUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
};

export type BlogItemParentUpdateOneInlineInput = {
  /** Create and connect one BlogItemParent document */
  create?: InputMaybe<BlogItemParentCreateInput>;
  /** Delete currently connected BlogItemParent document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single BlogItemParent document */
  update?: InputMaybe<BlogItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogItemParent document */
  upsert?: InputMaybe<BlogItemParentUpsertWithNestedWhereUniqueInput>;
};

export type BlogItemParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type BlogItemParentUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
};

export type BlogItemParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type BlogItemParentUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type BlogItemParentWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
};

export type BlogItemParentWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
};

export type BlogItemUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogItemUpdateManyInlineInput = {
  /** Create and connect multiple BlogItem component instances */
  create?: InputMaybe<Array<BlogItemCreateWithPositionInput>>;
  /** Delete multiple BlogItem documents */
  delete?: InputMaybe<Array<BlogItemWhereUniqueInput>>;
  /** Update multiple BlogItem component instances */
  update?: InputMaybe<
    Array<BlogItemUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple BlogItem component instances */
  upsert?: InputMaybe<
    Array<BlogItemUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type BlogItemUpdateManyInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BlogItemUpdateManyInput;
  /** Document search */
  where: BlogItemWhereInput;
};

export type BlogItemUpdateOneInlineInput = {
  /** Create and connect one BlogItem document */
  create?: InputMaybe<BlogItemCreateInput>;
  /** Delete currently connected BlogItem document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single BlogItem document */
  update?: InputMaybe<BlogItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogItem document */
  upsert?: InputMaybe<BlogItemUpsertWithNestedWhereUniqueInput>;
};

export type BlogItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<BlogItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: BlogItemWhereUniqueInput;
};

export type BlogItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BlogItemUpdateInput;
  /** Unique document search */
  where: BlogItemWhereUniqueInput;
};

export type BlogItemUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogItemCreateInput;
  /** Update document if it exists */
  update: BlogItemUpdateInput;
};

export type BlogItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<BlogItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: BlogItemWhereUniqueInput;
};

export type BlogItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BlogItemUpsertInput;
  /** Unique document search */
  where: BlogItemWhereUniqueInput;
};

/** Identifies documents */
export type BlogItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** References BlogItem record uniquely */
export type BlogItemWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Identifies documents */
export type BlogManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  /** All values in which the union is empty. */
  contents_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  contents_some?: InputMaybe<BlogcontentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BlogWhereStageInput>;
  documentInStages_none?: InputMaybe<BlogWhereStageInput>;
  documentInStages_some?: InputMaybe<BlogWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BlogOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type BlogUpdateInput = {
  contents?: InputMaybe<BlogcontentsUnionUpdateManyInlineInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogUpdateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect?: InputMaybe<Array<BlogConnectInput>>;
  /** Create and connect multiple Blog documents */
  create?: InputMaybe<Array<BlogCreateInput>>;
  /** Delete multiple Blog documents */
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Disconnect multiple Blog documents */
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Blog documents */
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Update multiple Blog documents */
  update?: InputMaybe<Array<BlogUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Blog documents */
  upsert?: InputMaybe<Array<BlogUpsertWithNestedWhereUniqueInput>>;
};

export type BlogUpdateManyInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BlogUpdateManyInput;
  /** Document search */
  where: BlogWhereInput;
};

export type BlogUpdateOneInlineInput = {
  /** Connect existing Blog document */
  connect?: InputMaybe<BlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create?: InputMaybe<BlogCreateInput>;
  /** Delete currently connected Blog document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Blog document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Blog document */
  update?: InputMaybe<BlogUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Blog document */
  upsert?: InputMaybe<BlogUpsertWithNestedWhereUniqueInput>;
};

export type BlogUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BlogUpdateInput;
  /** Unique document search */
  where: BlogWhereUniqueInput;
};

export type BlogUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogCreateInput;
  /** Update document if it exists */
  update: BlogUpdateInput;
};

export type BlogUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BlogUpsertInput;
  /** Unique document search */
  where: BlogWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BlogWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type BlogWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  /** All values in which the union is empty. */
  contents_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  contents_some?: InputMaybe<BlogcontentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BlogWhereStageInput>;
  documentInStages_none?: InputMaybe<BlogWhereStageInput>;
  documentInStages_some?: InputMaybe<BlogWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BlogWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BlogWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Blog record uniquely */
export type BlogWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type BlogcontentsUnion = Content;

export type BlogcontentsUnionConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
};

export type BlogcontentsUnionCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
};

export type BlogcontentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing BlogcontentsUnion documents */
  create?: InputMaybe<Array<BlogcontentsUnionCreateInput>>;
};

export type BlogcontentsUnionCreateOneInlineInput = {
  /** Create and connect one BlogcontentsUnion document */
  create?: InputMaybe<BlogcontentsUnionCreateInput>;
};

export type BlogcontentsUnionCreateWithPositionInput = {
  Content?: InputMaybe<ContentCreateWithPositionInput>;
};

export type BlogcontentsUnionUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
};

export type BlogcontentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple BlogcontentsUnion component instances */
  create?: InputMaybe<Array<BlogcontentsUnionCreateWithPositionInput>>;
  /** Delete multiple BlogcontentsUnion documents */
  delete?: InputMaybe<Array<BlogcontentsUnionWhereUniqueInput>>;
  /** Update multiple BlogcontentsUnion component instances */
  update?: InputMaybe<
    Array<BlogcontentsUnionUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple BlogcontentsUnion component instances */
  upsert?: InputMaybe<
    Array<BlogcontentsUnionUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type BlogcontentsUnionUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
};

export type BlogcontentsUnionUpdateOneInlineInput = {
  /** Create and connect one BlogcontentsUnion document */
  create?: InputMaybe<BlogcontentsUnionCreateInput>;
  /** Delete currently connected BlogcontentsUnion document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single BlogcontentsUnion document */
  update?: InputMaybe<BlogcontentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogcontentsUnion document */
  upsert?: InputMaybe<BlogcontentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type BlogcontentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type BlogcontentsUnionUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
};

export type BlogcontentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type BlogcontentsUnionUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type BlogcontentsUnionWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
};

export type BlogcontentsUnionWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: "Color";
  css: Scalars["String"]["output"];
  hex: Scalars["Hex"]["output"];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars["Hex"]["input"]>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]["input"]>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]["input"]>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Content = Entity & {
  __typename?: "Content";
  component?: Maybe<ContentcomponentUnion>;
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** System stage field */
  stage: Stage;
  version?: Maybe<Scalars["String"]["output"]>;
};

export type ContentComponentArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContentWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContentConnection = {
  __typename?: "ContentConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContentCreateInput = {
  component?: InputMaybe<ContentcomponentUnionCreateOneInlineInput>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type ContentCreateManyInlineInput = {
  /** Create and connect multiple existing Content documents */
  create?: InputMaybe<Array<ContentCreateInput>>;
};

export type ContentCreateOneInlineInput = {
  /** Create and connect one Content document */
  create?: InputMaybe<ContentCreateInput>;
};

export type ContentCreateWithPositionInput = {
  /** Document to create */
  data: ContentCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContentEdge = {
  __typename?: "ContentEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Content;
};

/** Identifies documents */
export type ContentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  /** All values in which the modular component is connected to the given models */
  component?: InputMaybe<ContentcomponentUnionWhereInput>;
  /** All values in which the union is empty. */
  component_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  enabled_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  version_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  version_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  version_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  version_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  version_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  version_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  version_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  version_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ContentOrderByInput {
  EnabledAsc = "enabled_ASC",
  EnabledDesc = "enabled_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  VersionAsc = "version_ASC",
  VersionDesc = "version_DESC",
}

export type ContentParent = Blog | Project;

export type ContentParentConnectInput = {
  Blog?: InputMaybe<BlogConnectInput>;
  Project?: InputMaybe<ProjectConnectInput>;
};

export type ContentParentCreateInput = {
  Blog?: InputMaybe<BlogCreateInput>;
  Project?: InputMaybe<ProjectCreateInput>;
};

export type ContentParentCreateManyInlineInput = {
  /** Connect multiple existing ContentParent documents */
  connect?: InputMaybe<Array<ContentParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContentParent documents */
  create?: InputMaybe<Array<ContentParentCreateInput>>;
};

export type ContentParentCreateOneInlineInput = {
  /** Connect one existing ContentParent document */
  connect?: InputMaybe<ContentParentWhereUniqueInput>;
  /** Create and connect one ContentParent document */
  create?: InputMaybe<ContentParentCreateInput>;
};

export type ContentParentUpdateInput = {
  Blog?: InputMaybe<BlogUpdateInput>;
  Project?: InputMaybe<ProjectUpdateInput>;
};

export type ContentParentUpdateManyInlineInput = {
  /** Connect multiple existing ContentParent documents */
  connect?: InputMaybe<Array<ContentParentConnectInput>>;
  /** Create and connect multiple ContentParent documents */
  create?: InputMaybe<Array<ContentParentCreateInput>>;
  /** Delete multiple ContentParent documents */
  delete?: InputMaybe<Array<ContentParentWhereUniqueInput>>;
  /** Disconnect multiple ContentParent documents */
  disconnect?: InputMaybe<Array<ContentParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContentParent documents */
  set?: InputMaybe<Array<ContentParentWhereUniqueInput>>;
  /** Update multiple ContentParent documents */
  update?: InputMaybe<Array<ContentParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContentParent documents */
  upsert?: InputMaybe<Array<ContentParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContentParentUpdateManyWithNestedWhereInput = {
  Blog?: InputMaybe<BlogUpdateManyWithNestedWhereInput>;
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type ContentParentUpdateOneInlineInput = {
  /** Connect existing ContentParent document */
  connect?: InputMaybe<ContentParentWhereUniqueInput>;
  /** Create and connect one ContentParent document */
  create?: InputMaybe<ContentParentCreateInput>;
  /** Delete currently connected ContentParent document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected ContentParent document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ContentParent document */
  update?: InputMaybe<ContentParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentParent document */
  upsert?: InputMaybe<ContentParentUpsertWithNestedWhereUniqueInput>;
};

export type ContentParentUpdateWithNestedWhereUniqueInput = {
  Blog?: InputMaybe<BlogUpdateWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type ContentParentUpsertWithNestedWhereUniqueInput = {
  Blog?: InputMaybe<BlogUpsertWithNestedWhereUniqueInput>;
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ContentParentWhereInput = {
  Blog?: InputMaybe<BlogWhereInput>;
  Project?: InputMaybe<ProjectWhereInput>;
};

export type ContentParentWhereUniqueInput = {
  Blog?: InputMaybe<BlogWhereUniqueInput>;
  Project?: InputMaybe<ProjectWhereUniqueInput>;
};

export type ContentUpdateInput = {
  component?: InputMaybe<ContentcomponentUnionUpdateOneInlineInput>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type ContentUpdateManyInlineInput = {
  /** Create and connect multiple Content component instances */
  create?: InputMaybe<Array<ContentCreateWithPositionInput>>;
  /** Delete multiple Content documents */
  delete?: InputMaybe<Array<ContentWhereUniqueInput>>;
  /** Update multiple Content component instances */
  update?: InputMaybe<
    Array<ContentUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple Content component instances */
  upsert?: InputMaybe<
    Array<ContentUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type ContentUpdateManyInput = {
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type ContentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContentUpdateManyInput;
  /** Document search */
  where: ContentWhereInput;
};

export type ContentUpdateOneInlineInput = {
  /** Create and connect one Content document */
  create?: InputMaybe<ContentCreateInput>;
  /** Delete currently connected Content document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Content document */
  update?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Content document */
  upsert?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type ContentUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContentUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContentWhereUniqueInput;
};

export type ContentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContentUpdateInput;
  /** Unique document search */
  where: ContentWhereUniqueInput;
};

export type ContentUpsertInput = {
  /** Create document if it didn't exist */
  create: ContentCreateInput;
  /** Update document if it exists */
  update: ContentUpdateInput;
};

export type ContentUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContentUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContentWhereUniqueInput;
};

export type ContentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContentUpsertInput;
  /** Unique document search */
  where: ContentWhereUniqueInput;
};

/** Identifies documents */
export type ContentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  /** All values in which the modular component is connected to the given models */
  component?: InputMaybe<ContentcomponentUnionWhereInput>;
  /** All values in which the union is empty. */
  component_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  enabled_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  version_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  version_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  version_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  version_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  version_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  version_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  version_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  version_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** References Content record uniquely */
export type ContentWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ContentcomponentUnion = BlogItem | ProjectItem;

export type ContentcomponentUnionConnectInput = {
  BlogItem?: InputMaybe<BlogItemConnectInput>;
  ProjectItem?: InputMaybe<ProjectItemConnectInput>;
};

export type ContentcomponentUnionCreateInput = {
  BlogItem?: InputMaybe<BlogItemCreateInput>;
  ProjectItem?: InputMaybe<ProjectItemCreateInput>;
};

export type ContentcomponentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing ContentcomponentUnion documents */
  create?: InputMaybe<Array<ContentcomponentUnionCreateInput>>;
};

export type ContentcomponentUnionCreateOneInlineInput = {
  /** Create and connect one ContentcomponentUnion document */
  create?: InputMaybe<ContentcomponentUnionCreateInput>;
};

export type ContentcomponentUnionCreateWithPositionInput = {
  BlogItem?: InputMaybe<BlogItemCreateWithPositionInput>;
  ProjectItem?: InputMaybe<ProjectItemCreateWithPositionInput>;
};

export type ContentcomponentUnionUpdateInput = {
  BlogItem?: InputMaybe<BlogItemUpdateInput>;
  ProjectItem?: InputMaybe<ProjectItemUpdateInput>;
};

export type ContentcomponentUnionUpdateManyInlineInput = {
  /** Create and connect multiple ContentcomponentUnion component instances */
  create?: InputMaybe<Array<ContentcomponentUnionCreateWithPositionInput>>;
  /** Delete multiple ContentcomponentUnion documents */
  delete?: InputMaybe<Array<ContentcomponentUnionWhereUniqueInput>>;
  /** Update multiple ContentcomponentUnion component instances */
  update?: InputMaybe<
    Array<ContentcomponentUnionUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple ContentcomponentUnion component instances */
  upsert?: InputMaybe<
    Array<ContentcomponentUnionUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type ContentcomponentUnionUpdateManyWithNestedWhereInput = {
  BlogItem?: InputMaybe<BlogItemUpdateManyWithNestedWhereInput>;
  ProjectItem?: InputMaybe<ProjectItemUpdateManyWithNestedWhereInput>;
};

export type ContentcomponentUnionUpdateOneInlineInput = {
  /** Create and connect one ContentcomponentUnion document */
  create?: InputMaybe<ContentcomponentUnionCreateInput>;
  /** Delete currently connected ContentcomponentUnion document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ContentcomponentUnion document */
  update?: InputMaybe<ContentcomponentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentcomponentUnion document */
  upsert?: InputMaybe<ContentcomponentUnionUpsertWithNestedWhereUniqueInput>;
};

export type ContentcomponentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  BlogItem?: InputMaybe<BlogItemUpdateWithNestedWhereUniqueAndPositionInput>;
  ProjectItem?: InputMaybe<ProjectItemUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ContentcomponentUnionUpdateWithNestedWhereUniqueInput = {
  BlogItem?: InputMaybe<BlogItemUpdateWithNestedWhereUniqueInput>;
  ProjectItem?: InputMaybe<ProjectItemUpdateWithNestedWhereUniqueInput>;
};

export type ContentcomponentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  BlogItem?: InputMaybe<BlogItemUpsertWithNestedWhereUniqueAndPositionInput>;
  ProjectItem?: InputMaybe<ProjectItemUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ContentcomponentUnionUpsertWithNestedWhereUniqueInput = {
  BlogItem?: InputMaybe<BlogItemUpsertWithNestedWhereUniqueInput>;
  ProjectItem?: InputMaybe<ProjectItemUpsertWithNestedWhereUniqueInput>;
};

export type ContentcomponentUnionWhereInput = {
  BlogItem?: InputMaybe<BlogItemWhereInput>;
  ProjectItem?: InputMaybe<ProjectItemWhereInput>;
};

export type ContentcomponentUnionWhereUniqueInput = {
  BlogItem?: InputMaybe<BlogItemWhereUniqueInput>;
  ProjectItem?: InputMaybe<ProjectItemWhereUniqueInput>;
};

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: "DocumentVersion";
  createdAt: Scalars["DateTime"]["output"];
  data?: Maybe<Scalars["Json"]["output"]>;
  id: Scalars["ID"]["output"];
  revision: Scalars["Int"]["output"];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars["ID"]["output"];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  App = "App",
  /** Asset system model */
  Asset = "Asset",
  Blog = "Blog",
  BlogItem = "BlogItem",
  Content = "Content",
  Maintenance = "Maintenance",
  Menu = "Menu",
  Project = "Project",
  ProjectItem = "ProjectItem",
  Resume = "Resume",
  /** Scheduled Operation system model */
  ScheduledOperation = "ScheduledOperation",
  /** Scheduled Release system model */
  ScheduledRelease = "ScheduledRelease",
  Social = "Social",
  TechStack = "TechStack",
  /** User system model */
  User = "User",
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars["ID"]["input"];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]["input"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = "en",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: "Location";
  distance: Scalars["Float"]["output"];
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"]["input"];
  longitude: Scalars["Float"]["input"];
};

export type Maintenance = Entity & {
  __typename?: "Maintenance";
  description?: Maybe<RichText>;
  farewell?: Maybe<Scalars["String"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  signature?: Maybe<Scalars["String"]["output"]>;
  /** System stage field */
  stage: Stage;
  text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** A connection to a list of items. */
export type MaintenanceConnection = {
  __typename?: "MaintenanceConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MaintenanceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MaintenanceCreateInput = {
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  farewell?: InputMaybe<Scalars["String"]["input"]>;
  signature?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MaintenanceCreateWithPositionInput = {
  /** Document to create */
  data: MaintenanceCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MaintenanceEdge = {
  __typename?: "MaintenanceEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Maintenance;
};

/** Identifies documents */
export type MaintenanceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MaintenanceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MaintenanceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MaintenanceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  farewell?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  farewell_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  farewell_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  farewell_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  farewell_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  farewell_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  farewell_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  farewell_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  farewell_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  farewell_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  signature?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  signature_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  signature_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  signature_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  signature_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  signature_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  signature_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  signature_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  signature_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  signature_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  text_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export enum MaintenanceOrderByInput {
  FarewellAsc = "farewell_ASC",
  FarewellDesc = "farewell_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  SignatureAsc = "signature_ASC",
  SignatureDesc = "signature_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type MaintenanceUpdateInput = {
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  farewell?: InputMaybe<Scalars["String"]["input"]>;
  signature?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MaintenanceUpdateManyInput = {
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  farewell?: InputMaybe<Scalars["String"]["input"]>;
  signature?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MaintenanceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MaintenanceUpdateManyInput;
  /** Document search */
  where: MaintenanceWhereInput;
};

export type MaintenanceUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MaintenanceUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MaintenanceUpdateInput;
  /** Unique document search */
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpsertInput = {
  /** Create document if it didn't exist */
  create: MaintenanceCreateInput;
  /** Update document if it exists */
  update: MaintenanceUpdateInput;
};

export type MaintenanceUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MaintenanceUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MaintenanceUpsertInput;
  /** Unique document search */
  where: MaintenanceWhereUniqueInput;
};

/** Identifies documents */
export type MaintenanceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MaintenanceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MaintenanceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MaintenanceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  farewell?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  farewell_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  farewell_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  farewell_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  farewell_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  farewell_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  farewell_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  farewell_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  farewell_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  farewell_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  signature?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  signature_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  signature_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  signature_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  signature_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  signature_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  signature_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  signature_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  signature_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  signature_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  text_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** References Maintenance record uniquely */
export type MaintenanceWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Menu = Entity & {
  __typename?: "Menu";
  href?: Maybe<Scalars["String"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  pathname?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  /** System stage field */
  stage: Stage;
};

export type MenuConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MenuWhereUniqueInput;
};

/** A connection to a list of items. */
export type MenuConnection = {
  __typename?: "MenuConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MenuEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MenuCreateInput = {
  href?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pathname?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type MenuCreateManyInlineInput = {
  /** Create and connect multiple existing Menu documents */
  create?: InputMaybe<Array<MenuCreateInput>>;
};

export type MenuCreateOneInlineInput = {
  /** Create and connect one Menu document */
  create?: InputMaybe<MenuCreateInput>;
};

export type MenuCreateWithPositionInput = {
  /** Document to create */
  data: MenuCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MenuEdge = {
  __typename?: "MenuEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Menu;
};

/** Identifies documents */
export type MenuManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MenuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MenuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MenuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  href?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pathname?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  pathname_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  pathname_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  pathname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  pathname_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  pathname_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  pathname_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  pathname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  pathname_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  pathname_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export enum MenuOrderByInput {
  HrefAsc = "href_ASC",
  HrefDesc = "href_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC",
  PathnameAsc = "pathname_ASC",
  PathnameDesc = "pathname_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
}

export type MenuParent = App;

export type MenuParentConnectInput = {
  App?: InputMaybe<AppConnectInput>;
};

export type MenuParentCreateInput = {
  App?: InputMaybe<AppCreateInput>;
};

export type MenuParentCreateManyInlineInput = {
  /** Connect multiple existing MenuParent documents */
  connect?: InputMaybe<Array<MenuParentWhereUniqueInput>>;
  /** Create and connect multiple existing MenuParent documents */
  create?: InputMaybe<Array<MenuParentCreateInput>>;
};

export type MenuParentCreateOneInlineInput = {
  /** Connect one existing MenuParent document */
  connect?: InputMaybe<MenuParentWhereUniqueInput>;
  /** Create and connect one MenuParent document */
  create?: InputMaybe<MenuParentCreateInput>;
};

export type MenuParentUpdateInput = {
  App?: InputMaybe<AppUpdateInput>;
};

export type MenuParentUpdateManyInlineInput = {
  /** Connect multiple existing MenuParent documents */
  connect?: InputMaybe<Array<MenuParentConnectInput>>;
  /** Create and connect multiple MenuParent documents */
  create?: InputMaybe<Array<MenuParentCreateInput>>;
  /** Delete multiple MenuParent documents */
  delete?: InputMaybe<Array<MenuParentWhereUniqueInput>>;
  /** Disconnect multiple MenuParent documents */
  disconnect?: InputMaybe<Array<MenuParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MenuParent documents */
  set?: InputMaybe<Array<MenuParentWhereUniqueInput>>;
  /** Update multiple MenuParent documents */
  update?: InputMaybe<Array<MenuParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MenuParent documents */
  upsert?: InputMaybe<Array<MenuParentUpsertWithNestedWhereUniqueInput>>;
};

export type MenuParentUpdateManyWithNestedWhereInput = {
  App?: InputMaybe<AppUpdateManyWithNestedWhereInput>;
};

export type MenuParentUpdateOneInlineInput = {
  /** Connect existing MenuParent document */
  connect?: InputMaybe<MenuParentWhereUniqueInput>;
  /** Create and connect one MenuParent document */
  create?: InputMaybe<MenuParentCreateInput>;
  /** Delete currently connected MenuParent document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected MenuParent document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single MenuParent document */
  update?: InputMaybe<MenuParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MenuParent document */
  upsert?: InputMaybe<MenuParentUpsertWithNestedWhereUniqueInput>;
};

export type MenuParentUpdateWithNestedWhereUniqueInput = {
  App?: InputMaybe<AppUpdateWithNestedWhereUniqueInput>;
};

export type MenuParentUpsertWithNestedWhereUniqueInput = {
  App?: InputMaybe<AppUpsertWithNestedWhereUniqueInput>;
};

export type MenuParentWhereInput = {
  App?: InputMaybe<AppWhereInput>;
};

export type MenuParentWhereUniqueInput = {
  App?: InputMaybe<AppWhereUniqueInput>;
};

export type MenuUpdateInput = {
  href?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pathname?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type MenuUpdateManyInlineInput = {
  /** Create and connect multiple Menu component instances */
  create?: InputMaybe<Array<MenuCreateWithPositionInput>>;
  /** Delete multiple Menu documents */
  delete?: InputMaybe<Array<MenuWhereUniqueInput>>;
  /** Update multiple Menu component instances */
  update?: InputMaybe<Array<MenuUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Menu component instances */
  upsert?: InputMaybe<Array<MenuUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MenuUpdateManyInput = {
  href?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pathname?: InputMaybe<Scalars["String"]["input"]>;
};

export type MenuUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MenuUpdateManyInput;
  /** Document search */
  where: MenuWhereInput;
};

export type MenuUpdateOneInlineInput = {
  /** Create and connect one Menu document */
  create?: InputMaybe<MenuCreateInput>;
  /** Delete currently connected Menu document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Menu document */
  update?: InputMaybe<MenuUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Menu document */
  upsert?: InputMaybe<MenuUpsertWithNestedWhereUniqueInput>;
};

export type MenuUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MenuUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MenuWhereUniqueInput;
};

export type MenuUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MenuUpdateInput;
  /** Unique document search */
  where: MenuWhereUniqueInput;
};

export type MenuUpsertInput = {
  /** Create document if it didn't exist */
  create: MenuCreateInput;
  /** Update document if it exists */
  update: MenuUpdateInput;
};

export type MenuUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MenuUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MenuWhereUniqueInput;
};

export type MenuUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MenuUpsertInput;
  /** Unique document search */
  where: MenuWhereUniqueInput;
};

/** Identifies documents */
export type MenuWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MenuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MenuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MenuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  href?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pathname?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  pathname_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  pathname_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  pathname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  pathname_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  pathname_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  pathname_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  pathname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  pathname_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  pathname_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** References Menu record uniquely */
export type MenuWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Create one app */
  createApp?: Maybe<App>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one blog */
  createBlog?: Maybe<Blog>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one resume */
  createResume?: Maybe<Resume>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one app from _all_ existing stages. Returns deleted document. */
  deleteApp?: Maybe<App>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one blog from _all_ existing stages. Returns deleted document. */
  deleteBlog?: Maybe<Blog>;
  /**
   * Delete many App documents
   * @deprecated Please use the new paginated many mutation (deleteManyAppsConnection)
   */
  deleteManyApps: BatchPayload;
  /** Delete many App documents, return deleted documents */
  deleteManyAppsConnection: AppConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Blog documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogsConnection)
   */
  deleteManyBlogs: BatchPayload;
  /** Delete many Blog documents, return deleted documents */
  deleteManyBlogsConnection: BlogConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /**
   * Delete many Resume documents
   * @deprecated Please use the new paginated many mutation (deleteManyResumesConnection)
   */
  deleteManyResumes: BatchPayload;
  /** Delete many Resume documents, return deleted documents */
  deleteManyResumesConnection: ResumeConnection;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete one resume from _all_ existing stages. Returns deleted document. */
  deleteResume?: Maybe<Resume>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one app */
  publishApp?: Maybe<App>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one blog */
  publishBlog?: Maybe<Blog>;
  /**
   * Publish many App documents
   * @deprecated Please use the new paginated many mutation (publishManyAppsConnection)
   */
  publishManyApps: BatchPayload;
  /** Publish many App documents */
  publishManyAppsConnection: AppConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Blog documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogsConnection)
   */
  publishManyBlogs: BatchPayload;
  /** Publish many Blog documents */
  publishManyBlogsConnection: BlogConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /**
   * Publish many Resume documents
   * @deprecated Please use the new paginated many mutation (publishManyResumesConnection)
   */
  publishManyResumes: BatchPayload;
  /** Publish many Resume documents */
  publishManyResumesConnection: ResumeConnection;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Publish one resume */
  publishResume?: Maybe<Resume>;
  /** Schedule to publish one app */
  schedulePublishApp?: Maybe<App>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one blog */
  schedulePublishBlog?: Maybe<Blog>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Schedule to publish one resume */
  schedulePublishResume?: Maybe<Resume>;
  /** Unpublish one app from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishApp?: Maybe<App>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBlog?: Maybe<Blog>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one resume from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishResume?: Maybe<Resume>;
  /** Unpublish one app from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishApp?: Maybe<App>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlog?: Maybe<Blog>;
  /**
   * Unpublish many App documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAppsConnection)
   */
  unpublishManyApps: BatchPayload;
  /** Find many App documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAppsConnection: AppConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Blog documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogsConnection)
   */
  unpublishManyBlogs: BatchPayload;
  /** Find many Blog documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogsConnection: BlogConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Unpublish many Resume documents
   * @deprecated Please use the new paginated many mutation (unpublishManyResumesConnection)
   */
  unpublishManyResumes: BatchPayload;
  /** Find many Resume documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyResumesConnection: ResumeConnection;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Unpublish one resume from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishResume?: Maybe<Resume>;
  /** Update one app */
  updateApp?: Maybe<App>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one blog */
  updateBlog?: Maybe<Blog>;
  /**
   * Update many apps
   * @deprecated Please use the new paginated many mutation (updateManyAppsConnection)
   */
  updateManyApps: BatchPayload;
  /** Update many App documents */
  updateManyAppsConnection: AppConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many blogs
   * @deprecated Please use the new paginated many mutation (updateManyBlogsConnection)
   */
  updateManyBlogs: BatchPayload;
  /** Update many Blog documents */
  updateManyBlogsConnection: BlogConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /**
   * Update many resumes
   * @deprecated Please use the new paginated many mutation (updateManyResumesConnection)
   */
  updateManyResumes: BatchPayload;
  /** Update many Resume documents */
  updateManyResumesConnection: ResumeConnection;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one resume */
  updateResume?: Maybe<Resume>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one app */
  upsertApp?: Maybe<App>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one blog */
  upsertBlog?: Maybe<Blog>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Upsert one resume */
  upsertResume?: Maybe<Resume>;
};

export type MutationCreateAppArgs = {
  data: AppCreateInput;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateBlogArgs = {
  data: BlogCreateInput;
};

export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationCreateResumeArgs = {
  data: ResumeCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAppArgs = {
  where: AppWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteBlogArgs = {
  where: BlogWhereUniqueInput;
};

export type MutationDeleteManyAppsArgs = {
  where?: InputMaybe<AppManyWhereInput>;
};

export type MutationDeleteManyAppsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AppManyWhereInput>;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyBlogsArgs = {
  where?: InputMaybe<BlogManyWhereInput>;
};

export type MutationDeleteManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BlogManyWhereInput>;
};

export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationDeleteManyResumesArgs = {
  where?: InputMaybe<ResumeManyWhereInput>;
};

export type MutationDeleteManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ResumeManyWhereInput>;
};

export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type MutationDeleteResumeArgs = {
  where: ResumeWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAppArgs = {
  to?: Array<Stage>;
  where: AppWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishBlogArgs = {
  to?: Array<Stage>;
  where: BlogWhereUniqueInput;
};

export type MutationPublishManyAppsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AppManyWhereInput>;
};

export type MutationPublishManyAppsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AppManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyBlogsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
};

export type MutationPublishManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
};

export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationPublishManyResumesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};

export type MutationPublishManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};

export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};

export type MutationPublishResumeArgs = {
  to?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};

export type MutationSchedulePublishAppArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: AppWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSchedulePublishBlogArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: BlogWhereUniqueInput;
};

export type MutationSchedulePublishProjectArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};

export type MutationSchedulePublishResumeArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};

export type MutationScheduleUnpublishAppArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: AppWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishBlogArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: BlogWhereUniqueInput;
};

export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: ProjectWhereUniqueInput;
};

export type MutationScheduleUnpublishResumeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: ResumeWhereUniqueInput;
};

export type MutationUnpublishAppArgs = {
  from?: Array<Stage>;
  where: AppWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishBlogArgs = {
  from?: Array<Stage>;
  where: BlogWhereUniqueInput;
};

export type MutationUnpublishManyAppsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AppManyWhereInput>;
};

export type MutationUnpublishManyAppsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AppManyWhereInput>;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyBlogsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
};

export type MutationUnpublishManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
};

export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManyResumesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};

export type MutationUnpublishManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ResumeManyWhereInput>;
};

export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};

export type MutationUnpublishResumeArgs = {
  from?: Array<Stage>;
  where: ResumeWhereUniqueInput;
};

export type MutationUpdateAppArgs = {
  data: AppUpdateInput;
  where: AppWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateBlogArgs = {
  data: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};

export type MutationUpdateManyAppsArgs = {
  data: AppUpdateManyInput;
  where?: InputMaybe<AppManyWhereInput>;
};

export type MutationUpdateManyAppsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: AppUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AppManyWhereInput>;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyBlogsArgs = {
  data: BlogUpdateManyInput;
  where?: InputMaybe<BlogManyWhereInput>;
};

export type MutationUpdateManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: BlogUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BlogManyWhereInput>;
};

export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: ProjectUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUpdateManyResumesArgs = {
  data: ResumeUpdateManyInput;
  where?: InputMaybe<ResumeManyWhereInput>;
};

export type MutationUpdateManyResumesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: ResumeUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ResumeManyWhereInput>;
};

export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpdateResumeArgs = {
  data: ResumeUpdateInput;
  where: ResumeWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAppArgs = {
  upsert: AppUpsertInput;
  where: AppWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertBlogArgs = {
  upsert: BlogUpsertInput;
  where: BlogWhereUniqueInput;
};

export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpsertResumeArgs = {
  upsert: ResumeUpsertInput;
  where: ResumeWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"]["output"];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]["output"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Project = Entity &
  Node & {
    __typename?: "Project";
    contents: Array<ProjectcontentsUnion>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"]["output"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Project>;
    /** List of Project versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"]["output"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    title?: Maybe<Scalars["String"]["output"]>;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"]["output"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
  };

export type ProjectContentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type ProjectHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type ProjectPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProjectUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: "ProjectConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  contents?: InputMaybe<ProjectcontentsUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: "ProjectEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Project;
};

export type ProjectItem = Entity & {
  __typename?: "ProjectItem";
  description?: Maybe<RichText>;
  flag?: Maybe<Scalars["Boolean"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  link?: Maybe<Scalars["Json"]["output"]>;
  media: Array<Asset>;
  slug?: Maybe<Scalars["String"]["output"]>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectItemMediaArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetWhereInput>;
};

export type ProjectItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectItemConnection = {
  __typename?: "ProjectItemConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectItemCreateInput = {
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  flag?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["Json"]["input"]>;
  media?: InputMaybe<AssetCreateManyInlineInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectItemCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectItem documents */
  create?: InputMaybe<Array<ProjectItemCreateInput>>;
};

export type ProjectItemCreateOneInlineInput = {
  /** Create and connect one ProjectItem document */
  create?: InputMaybe<ProjectItemCreateInput>;
};

export type ProjectItemCreateWithPositionInput = {
  /** Document to create */
  data: ProjectItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProjectItemEdge = {
  __typename?: "ProjectItemEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ProjectItem;
};

/** Identifies documents */
export type ProjectItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  flag?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  flag_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given json path. */
  link_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  link_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
  media_every?: InputMaybe<AssetWhereInput>;
  media_none?: InputMaybe<AssetWhereInput>;
  media_some?: InputMaybe<AssetWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ProjectItemOrderByInput {
  FlagAsc = "flag_ASC",
  FlagDesc = "flag_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ProjectItemParent = Content;

export type ProjectItemParentConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
};

export type ProjectItemParentCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
};

export type ProjectItemParentCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectItemParent documents */
  create?: InputMaybe<Array<ProjectItemParentCreateInput>>;
};

export type ProjectItemParentCreateOneInlineInput = {
  /** Create and connect one ProjectItemParent document */
  create?: InputMaybe<ProjectItemParentCreateInput>;
};

export type ProjectItemParentCreateWithPositionInput = {
  Content?: InputMaybe<ContentCreateWithPositionInput>;
};

export type ProjectItemParentUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
};

export type ProjectItemParentUpdateManyInlineInput = {
  /** Create and connect multiple ProjectItemParent component instances */
  create?: InputMaybe<Array<ProjectItemParentCreateWithPositionInput>>;
  /** Delete multiple ProjectItemParent documents */
  delete?: InputMaybe<Array<ProjectItemParentWhereUniqueInput>>;
  /** Update multiple ProjectItemParent component instances */
  update?: InputMaybe<
    Array<ProjectItemParentUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple ProjectItemParent component instances */
  upsert?: InputMaybe<
    Array<ProjectItemParentUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type ProjectItemParentUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
};

export type ProjectItemParentUpdateOneInlineInput = {
  /** Create and connect one ProjectItemParent document */
  create?: InputMaybe<ProjectItemParentCreateInput>;
  /** Delete currently connected ProjectItemParent document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ProjectItemParent document */
  update?: InputMaybe<ProjectItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectItemParent document */
  upsert?: InputMaybe<ProjectItemParentUpsertWithNestedWhereUniqueInput>;
};

export type ProjectItemParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ProjectItemParentUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
};

export type ProjectItemParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ProjectItemParentUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type ProjectItemParentWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
};

export type ProjectItemParentWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
};

export type ProjectItemUpdateInput = {
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  flag?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["Json"]["input"]>;
  media?: InputMaybe<AssetUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectItemUpdateManyInlineInput = {
  /** Create and connect multiple ProjectItem component instances */
  create?: InputMaybe<Array<ProjectItemCreateWithPositionInput>>;
  /** Delete multiple ProjectItem documents */
  delete?: InputMaybe<Array<ProjectItemWhereUniqueInput>>;
  /** Update multiple ProjectItem component instances */
  update?: InputMaybe<
    Array<ProjectItemUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple ProjectItem component instances */
  upsert?: InputMaybe<
    Array<ProjectItemUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type ProjectItemUpdateManyInput = {
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  flag?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["Json"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectItemUpdateManyInput;
  /** Document search */
  where: ProjectItemWhereInput;
};

export type ProjectItemUpdateOneInlineInput = {
  /** Create and connect one ProjectItem document */
  create?: InputMaybe<ProjectItemCreateInput>;
  /** Delete currently connected ProjectItem document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ProjectItem document */
  update?: InputMaybe<ProjectItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectItem document */
  upsert?: InputMaybe<ProjectItemUpsertWithNestedWhereUniqueInput>;
};

export type ProjectItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProjectItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProjectItemWhereUniqueInput;
};

export type ProjectItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectItemUpdateInput;
  /** Unique document search */
  where: ProjectItemWhereUniqueInput;
};

export type ProjectItemUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectItemCreateInput;
  /** Update document if it exists */
  update: ProjectItemUpdateInput;
};

export type ProjectItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProjectItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProjectItemWhereUniqueInput;
};

export type ProjectItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectItemUpsertInput;
  /** Unique document search */
  where: ProjectItemWhereUniqueInput;
};

/** Identifies documents */
export type ProjectItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  flag?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  flag_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given json path. */
  link_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  link_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
  media_every?: InputMaybe<AssetWhereInput>;
  media_none?: InputMaybe<AssetWhereInput>;
  media_some?: InputMaybe<AssetWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** References ProjectItem record uniquely */
export type ProjectItemWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  /** All values in which the union is empty. */
  contents_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  contents_some?: InputMaybe<ProjectcontentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ProjectUpdateInput = {
  contents?: InputMaybe<ProjectcontentsUnionUpdateManyInlineInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  /** All values in which the union is empty. */
  contents_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  contents_some?: InputMaybe<ProjectcontentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ProjectcontentsUnion = Content;

export type ProjectcontentsUnionConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
};

export type ProjectcontentsUnionCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
};

export type ProjectcontentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectcontentsUnion documents */
  create?: InputMaybe<Array<ProjectcontentsUnionCreateInput>>;
};

export type ProjectcontentsUnionCreateOneInlineInput = {
  /** Create and connect one ProjectcontentsUnion document */
  create?: InputMaybe<ProjectcontentsUnionCreateInput>;
};

export type ProjectcontentsUnionCreateWithPositionInput = {
  Content?: InputMaybe<ContentCreateWithPositionInput>;
};

export type ProjectcontentsUnionUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
};

export type ProjectcontentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple ProjectcontentsUnion component instances */
  create?: InputMaybe<Array<ProjectcontentsUnionCreateWithPositionInput>>;
  /** Delete multiple ProjectcontentsUnion documents */
  delete?: InputMaybe<Array<ProjectcontentsUnionWhereUniqueInput>>;
  /** Update multiple ProjectcontentsUnion component instances */
  update?: InputMaybe<
    Array<ProjectcontentsUnionUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple ProjectcontentsUnion component instances */
  upsert?: InputMaybe<
    Array<ProjectcontentsUnionUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type ProjectcontentsUnionUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
};

export type ProjectcontentsUnionUpdateOneInlineInput = {
  /** Create and connect one ProjectcontentsUnion document */
  create?: InputMaybe<ProjectcontentsUnionCreateInput>;
  /** Delete currently connected ProjectcontentsUnion document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ProjectcontentsUnion document */
  update?: InputMaybe<ProjectcontentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectcontentsUnion document */
  upsert?: InputMaybe<ProjectcontentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type ProjectcontentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ProjectcontentsUnionUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
};

export type ProjectcontentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ProjectcontentsUnionUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type ProjectcontentsUnionWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
};

export type ProjectcontentsUnionWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: "Query";
  /** Retrieve a single app */
  app?: Maybe<App>;
  /** Retrieve document version */
  appVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple apps */
  apps: Array<App>;
  /** Retrieve multiple apps using the Relay connection interface */
  appsConnection: AppConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single blog */
  blog?: Maybe<Blog>;
  /** Retrieve document version */
  blogVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogs */
  blogs: Array<Blog>;
  /** Retrieve multiple blogs using the Relay connection interface */
  blogsConnection: BlogConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single resume */
  resume?: Maybe<Resume>;
  /** Retrieve document version */
  resumeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple resumes */
  resumes: Array<Resume>;
  /** Retrieve multiple resumes using the Relay connection interface */
  resumesConnection: ResumeConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};

export type QueryAppArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AppWhereUniqueInput;
};

export type QueryAppVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAppsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AppOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AppWhereInput>;
};

export type QueryAppsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AppOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AppWhereInput>;
};

export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryBlogArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BlogWhereUniqueInput;
};

export type QueryBlogVersionArgs = {
  where: VersionWhereInput;
};

export type QueryBlogsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<BlogWhereInput>;
};

export type QueryBlogsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<BlogWhereInput>;
};

export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"]["input"];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};

export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryResumeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ResumeWhereUniqueInput;
};

export type QueryResumeVersionArgs = {
  where: VersionWhereInput;
};

export type QueryResumesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ResumeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ResumeWhereInput>;
};

export type QueryResumesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ResumeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ResumeWhereInput>;
};

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: "RGBA";
  a: Scalars["RGBATransparency"]["output"];
  b: Scalars["RGBAHue"]["output"];
  g: Scalars["RGBAHue"]["output"];
  r: Scalars["RGBAHue"]["output"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"]["input"];
  b: Scalars["RGBAHue"]["input"];
  g: Scalars["RGBAHue"]["input"];
  r: Scalars["RGBAHue"]["input"];
};

export type Resume = Entity &
  Node & {
    __typename?: "Resume";
    companyName?: Maybe<Scalars["String"]["output"]>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"]["output"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    description?: Maybe<RichText>;
    /** Get the document in other stages */
    documentInStages: Array<Resume>;
    endWorking?: Maybe<Scalars["Date"]["output"]>;
    /** List of Resume versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"]["output"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    startWorking?: Maybe<Scalars["Date"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"]["output"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
  };

export type ResumeCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ResumeDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type ResumeHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type ResumePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ResumeScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ResumeUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ResumeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ResumeWhereUniqueInput;
};

/** A connection to a list of items. */
export type ResumeConnection = {
  __typename?: "ResumeConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ResumeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ResumeCreateInput = {
  companyName?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  endWorking?: InputMaybe<Scalars["Date"]["input"]>;
  startWorking?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ResumeCreateManyInlineInput = {
  /** Connect multiple existing Resume documents */
  connect?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Create and connect multiple existing Resume documents */
  create?: InputMaybe<Array<ResumeCreateInput>>;
};

export type ResumeCreateOneInlineInput = {
  /** Connect one existing Resume document */
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  /** Create and connect one Resume document */
  create?: InputMaybe<ResumeCreateInput>;
};

/** An edge in a connection. */
export type ResumeEdge = {
  __typename?: "ResumeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Resume;
};

/** Identifies documents */
export type ResumeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  companyName?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  companyName_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  companyName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  companyName_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  companyName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  companyName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  companyName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  companyName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  companyName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_none?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_some?: InputMaybe<ResumeWhereStageInput>;
  endWorking?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than the given value. */
  endWorking_gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than or equal the given value. */
  endWorking_gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are contained in given list. */
  endWorking_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** All values less than the given value. */
  endWorking_lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values less than or equal the given value. */
  endWorking_lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  endWorking_not?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are not contained in given list. */
  endWorking_not_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  startWorking?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than the given value. */
  startWorking_gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than or equal the given value. */
  startWorking_gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are contained in given list. */
  startWorking_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** All values less than the given value. */
  startWorking_lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values less than or equal the given value. */
  startWorking_lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  startWorking_not?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are not contained in given list. */
  startWorking_not_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ResumeOrderByInput {
  CompanyNameAsc = "companyName_ASC",
  CompanyNameDesc = "companyName_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  EndWorkingAsc = "endWorking_ASC",
  EndWorkingDesc = "endWorking_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StartWorkingAsc = "startWorking_ASC",
  StartWorkingDesc = "startWorking_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ResumeUpdateInput = {
  companyName?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  endWorking?: InputMaybe<Scalars["Date"]["input"]>;
  startWorking?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ResumeUpdateManyInlineInput = {
  /** Connect multiple existing Resume documents */
  connect?: InputMaybe<Array<ResumeConnectInput>>;
  /** Create and connect multiple Resume documents */
  create?: InputMaybe<Array<ResumeCreateInput>>;
  /** Delete multiple Resume documents */
  delete?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Disconnect multiple Resume documents */
  disconnect?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Resume documents */
  set?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Update multiple Resume documents */
  update?: InputMaybe<Array<ResumeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Resume documents */
  upsert?: InputMaybe<Array<ResumeUpsertWithNestedWhereUniqueInput>>;
};

export type ResumeUpdateManyInput = {
  companyName?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["RichTextAST"]["input"]>;
  endWorking?: InputMaybe<Scalars["Date"]["input"]>;
  startWorking?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ResumeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ResumeUpdateManyInput;
  /** Document search */
  where: ResumeWhereInput;
};

export type ResumeUpdateOneInlineInput = {
  /** Connect existing Resume document */
  connect?: InputMaybe<ResumeWhereUniqueInput>;
  /** Create and connect one Resume document */
  create?: InputMaybe<ResumeCreateInput>;
  /** Delete currently connected Resume document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Resume document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Resume document */
  update?: InputMaybe<ResumeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Resume document */
  upsert?: InputMaybe<ResumeUpsertWithNestedWhereUniqueInput>;
};

export type ResumeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ResumeUpdateInput;
  /** Unique document search */
  where: ResumeWhereUniqueInput;
};

export type ResumeUpsertInput = {
  /** Create document if it didn't exist */
  create: ResumeCreateInput;
  /** Update document if it exists */
  update: ResumeUpdateInput;
};

export type ResumeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ResumeUpsertInput;
  /** Unique document search */
  where: ResumeWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ResumeWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ResumeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  companyName?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  companyName_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  companyName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  companyName_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  companyName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  companyName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  companyName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  companyName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  companyName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_none?: InputMaybe<ResumeWhereStageInput>;
  documentInStages_some?: InputMaybe<ResumeWhereStageInput>;
  endWorking?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than the given value. */
  endWorking_gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than or equal the given value. */
  endWorking_gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are contained in given list. */
  endWorking_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** All values less than the given value. */
  endWorking_lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values less than or equal the given value. */
  endWorking_lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  endWorking_not?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are not contained in given list. */
  endWorking_not_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  startWorking?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than the given value. */
  startWorking_gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than or equal the given value. */
  startWorking_gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are contained in given list. */
  startWorking_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** All values less than the given value. */
  startWorking_lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values less than or equal the given value. */
  startWorking_lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  startWorking_not?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are not contained in given list. */
  startWorking_not_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ResumeWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ResumeWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Resume record uniquely */
export type ResumeWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: "RichText";
  /** Returns HTMl representation */
  html: Scalars["String"]["output"];
  /** Returns Markdown representation */
  markdown: Scalars["String"]["output"];
  /** Returns AST representation */
  raw: Scalars["RichTextAST"]["output"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"]["output"];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity &
  Node & {
    __typename?: "ScheduledOperation";
    affectedDocuments: Array<ScheduledOperationAffectedDocument>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"]["output"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Operation description */
    description?: Maybe<Scalars["String"]["output"]>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledOperation>;
    /** Operation error message */
    errorMessage?: Maybe<Scalars["String"]["output"]>;
    /** The unique identifier */
    id: Scalars["ID"]["output"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars["Json"]["output"];
    /** The release this operation is scheduled for */
    release?: Maybe<ScheduledRelease>;
    /** System stage field */
    stage: Stage;
    /** operation Status */
    status: ScheduledOperationStatus;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"]["output"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
  };

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
  | App
  | Asset
  | Blog
  | Project
  | Resume;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: "ScheduledOperationConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: "ScheduledOperationEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity &
  Node & {
    __typename?: "ScheduledRelease";
    /** The time the document was created */
    createdAt: Scalars["DateTime"]["output"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Release description */
    description?: Maybe<Scalars["String"]["output"]>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledRelease>;
    /** Release error message */
    errorMessage?: Maybe<Scalars["String"]["output"]>;
    /** The unique identifier */
    id: Scalars["ID"]["output"];
    /** Whether scheduled release should be run */
    isActive: Scalars["Boolean"]["output"];
    /** Whether scheduled release is implicit */
    isImplicit: Scalars["Boolean"]["output"];
    /** Operations to run with this release */
    operations: Array<ScheduledOperation>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Release date and time */
    releaseAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** System stage field */
    stage: Stage;
    /** Release Status */
    status: ScheduledReleaseStatus;
    /** Release Title */
    title?: Maybe<Scalars["String"]["output"]>;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"]["output"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
  };

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: "ScheduledReleaseConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: "ScheduledReleaseEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Social = Entity & {
  __typename?: "Social";
  icon?: Maybe<Scalars["String"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  /** System stage field */
  stage: Stage;
};

export type SocialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SocialWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialConnection = {
  __typename?: "SocialConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SocialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SocialCreateInput = {
  icon?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
};

export type SocialCreateManyInlineInput = {
  /** Create and connect multiple existing Social documents */
  create?: InputMaybe<Array<SocialCreateInput>>;
};

export type SocialCreateOneInlineInput = {
  /** Create and connect one Social document */
  create?: InputMaybe<SocialCreateInput>;
};

export type SocialCreateWithPositionInput = {
  /** Document to create */
  data: SocialCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SocialEdge = {
  __typename?: "SocialEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Social;
};

/** Identifies documents */
export type SocialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  icon_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  icon_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  icon_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  icon_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  icon_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  icon_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  icon_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export enum SocialOrderByInput {
  IconAsc = "icon_ASC",
  IconDesc = "icon_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
}

export type SocialParent = App;

export type SocialParentConnectInput = {
  App?: InputMaybe<AppConnectInput>;
};

export type SocialParentCreateInput = {
  App?: InputMaybe<AppCreateInput>;
};

export type SocialParentCreateManyInlineInput = {
  /** Connect multiple existing SocialParent documents */
  connect?: InputMaybe<Array<SocialParentWhereUniqueInput>>;
  /** Create and connect multiple existing SocialParent documents */
  create?: InputMaybe<Array<SocialParentCreateInput>>;
};

export type SocialParentCreateOneInlineInput = {
  /** Connect one existing SocialParent document */
  connect?: InputMaybe<SocialParentWhereUniqueInput>;
  /** Create and connect one SocialParent document */
  create?: InputMaybe<SocialParentCreateInput>;
};

export type SocialParentUpdateInput = {
  App?: InputMaybe<AppUpdateInput>;
};

export type SocialParentUpdateManyInlineInput = {
  /** Connect multiple existing SocialParent documents */
  connect?: InputMaybe<Array<SocialParentConnectInput>>;
  /** Create and connect multiple SocialParent documents */
  create?: InputMaybe<Array<SocialParentCreateInput>>;
  /** Delete multiple SocialParent documents */
  delete?: InputMaybe<Array<SocialParentWhereUniqueInput>>;
  /** Disconnect multiple SocialParent documents */
  disconnect?: InputMaybe<Array<SocialParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SocialParent documents */
  set?: InputMaybe<Array<SocialParentWhereUniqueInput>>;
  /** Update multiple SocialParent documents */
  update?: InputMaybe<Array<SocialParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SocialParent documents */
  upsert?: InputMaybe<Array<SocialParentUpsertWithNestedWhereUniqueInput>>;
};

export type SocialParentUpdateManyWithNestedWhereInput = {
  App?: InputMaybe<AppUpdateManyWithNestedWhereInput>;
};

export type SocialParentUpdateOneInlineInput = {
  /** Connect existing SocialParent document */
  connect?: InputMaybe<SocialParentWhereUniqueInput>;
  /** Create and connect one SocialParent document */
  create?: InputMaybe<SocialParentCreateInput>;
  /** Delete currently connected SocialParent document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected SocialParent document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single SocialParent document */
  update?: InputMaybe<SocialParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SocialParent document */
  upsert?: InputMaybe<SocialParentUpsertWithNestedWhereUniqueInput>;
};

export type SocialParentUpdateWithNestedWhereUniqueInput = {
  App?: InputMaybe<AppUpdateWithNestedWhereUniqueInput>;
};

export type SocialParentUpsertWithNestedWhereUniqueInput = {
  App?: InputMaybe<AppUpsertWithNestedWhereUniqueInput>;
};

export type SocialParentWhereInput = {
  App?: InputMaybe<AppWhereInput>;
};

export type SocialParentWhereUniqueInput = {
  App?: InputMaybe<AppWhereUniqueInput>;
};

export type SocialUpdateInput = {
  icon?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
};

export type SocialUpdateManyInlineInput = {
  /** Create and connect multiple Social component instances */
  create?: InputMaybe<Array<SocialCreateWithPositionInput>>;
  /** Delete multiple Social documents */
  delete?: InputMaybe<Array<SocialWhereUniqueInput>>;
  /** Update multiple Social component instances */
  update?: InputMaybe<Array<SocialUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Social component instances */
  upsert?: InputMaybe<Array<SocialUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SocialUpdateManyInput = {
  icon?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
};

export type SocialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialUpdateManyInput;
  /** Document search */
  where: SocialWhereInput;
};

export type SocialUpdateOneInlineInput = {
  /** Create and connect one Social document */
  create?: InputMaybe<SocialCreateInput>;
  /** Delete currently connected Social document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Social document */
  update?: InputMaybe<SocialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Social document */
  upsert?: InputMaybe<SocialUpsertWithNestedWhereUniqueInput>;
};

export type SocialUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SocialUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SocialWhereUniqueInput;
};

export type SocialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialUpdateInput;
  /** Unique document search */
  where: SocialWhereUniqueInput;
};

export type SocialUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialCreateInput;
  /** Update document if it exists */
  update: SocialUpdateInput;
};

export type SocialUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SocialUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SocialWhereUniqueInput;
};

export type SocialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialUpsertInput;
  /** Unique document search */
  where: SocialWhereUniqueInput;
};

/** Identifies documents */
export type SocialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  icon_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  icon_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  icon_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  icon_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  icon_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  icon_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  icon_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** References Social record uniquely */
export type SocialWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type TechStack = Entity & {
  __typename?: "TechStack";
  experience?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  media?: Maybe<Asset>;
  since?: Maybe<Scalars["Date"]["output"]>;
  /** System stage field */
  stage: Stage;
};

export type TechStackMediaArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TechStackConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TechStackWhereUniqueInput;
};

/** A connection to a list of items. */
export type TechStackConnection = {
  __typename?: "TechStackConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TechStackEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TechStackCreateInput = {
  experience?: InputMaybe<Scalars["Int"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  media?: InputMaybe<AssetCreateOneInlineInput>;
  since?: InputMaybe<Scalars["Date"]["input"]>;
};

export type TechStackCreateManyInlineInput = {
  /** Create and connect multiple existing TechStack documents */
  create?: InputMaybe<Array<TechStackCreateInput>>;
};

export type TechStackCreateOneInlineInput = {
  /** Create and connect one TechStack document */
  create?: InputMaybe<TechStackCreateInput>;
};

export type TechStackCreateWithPositionInput = {
  /** Document to create */
  data: TechStackCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TechStackEdge = {
  __typename?: "TechStackEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: TechStack;
};

/** Identifies documents */
export type TechStackManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechStackWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechStackWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechStackWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  experience?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  experience_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  experience_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  experience_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  experience_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  experience_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  experience_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  experience_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  media?: InputMaybe<AssetWhereInput>;
  since?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than the given value. */
  since_gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than or equal the given value. */
  since_gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are contained in given list. */
  since_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** All values less than the given value. */
  since_lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values less than or equal the given value. */
  since_lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  since_not?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are not contained in given list. */
  since_not_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
};

export enum TechStackOrderByInput {
  ExperienceAsc = "experience_ASC",
  ExperienceDesc = "experience_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  SinceAsc = "since_ASC",
  SinceDesc = "since_DESC",
}

export type TechStackParent = App;

export type TechStackParentConnectInput = {
  App?: InputMaybe<AppConnectInput>;
};

export type TechStackParentCreateInput = {
  App?: InputMaybe<AppCreateInput>;
};

export type TechStackParentCreateManyInlineInput = {
  /** Connect multiple existing TechStackParent documents */
  connect?: InputMaybe<Array<TechStackParentWhereUniqueInput>>;
  /** Create and connect multiple existing TechStackParent documents */
  create?: InputMaybe<Array<TechStackParentCreateInput>>;
};

export type TechStackParentCreateOneInlineInput = {
  /** Connect one existing TechStackParent document */
  connect?: InputMaybe<TechStackParentWhereUniqueInput>;
  /** Create and connect one TechStackParent document */
  create?: InputMaybe<TechStackParentCreateInput>;
};

export type TechStackParentUpdateInput = {
  App?: InputMaybe<AppUpdateInput>;
};

export type TechStackParentUpdateManyInlineInput = {
  /** Connect multiple existing TechStackParent documents */
  connect?: InputMaybe<Array<TechStackParentConnectInput>>;
  /** Create and connect multiple TechStackParent documents */
  create?: InputMaybe<Array<TechStackParentCreateInput>>;
  /** Delete multiple TechStackParent documents */
  delete?: InputMaybe<Array<TechStackParentWhereUniqueInput>>;
  /** Disconnect multiple TechStackParent documents */
  disconnect?: InputMaybe<Array<TechStackParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TechStackParent documents */
  set?: InputMaybe<Array<TechStackParentWhereUniqueInput>>;
  /** Update multiple TechStackParent documents */
  update?: InputMaybe<Array<TechStackParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TechStackParent documents */
  upsert?: InputMaybe<Array<TechStackParentUpsertWithNestedWhereUniqueInput>>;
};

export type TechStackParentUpdateManyWithNestedWhereInput = {
  App?: InputMaybe<AppUpdateManyWithNestedWhereInput>;
};

export type TechStackParentUpdateOneInlineInput = {
  /** Connect existing TechStackParent document */
  connect?: InputMaybe<TechStackParentWhereUniqueInput>;
  /** Create and connect one TechStackParent document */
  create?: InputMaybe<TechStackParentCreateInput>;
  /** Delete currently connected TechStackParent document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected TechStackParent document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single TechStackParent document */
  update?: InputMaybe<TechStackParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TechStackParent document */
  upsert?: InputMaybe<TechStackParentUpsertWithNestedWhereUniqueInput>;
};

export type TechStackParentUpdateWithNestedWhereUniqueInput = {
  App?: InputMaybe<AppUpdateWithNestedWhereUniqueInput>;
};

export type TechStackParentUpsertWithNestedWhereUniqueInput = {
  App?: InputMaybe<AppUpsertWithNestedWhereUniqueInput>;
};

export type TechStackParentWhereInput = {
  App?: InputMaybe<AppWhereInput>;
};

export type TechStackParentWhereUniqueInput = {
  App?: InputMaybe<AppWhereUniqueInput>;
};

export type TechStackUpdateInput = {
  experience?: InputMaybe<Scalars["Int"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  media?: InputMaybe<AssetUpdateOneInlineInput>;
  since?: InputMaybe<Scalars["Date"]["input"]>;
};

export type TechStackUpdateManyInlineInput = {
  /** Create and connect multiple TechStack component instances */
  create?: InputMaybe<Array<TechStackCreateWithPositionInput>>;
  /** Delete multiple TechStack documents */
  delete?: InputMaybe<Array<TechStackWhereUniqueInput>>;
  /** Update multiple TechStack component instances */
  update?: InputMaybe<
    Array<TechStackUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple TechStack component instances */
  upsert?: InputMaybe<
    Array<TechStackUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type TechStackUpdateManyInput = {
  experience?: InputMaybe<Scalars["Int"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  since?: InputMaybe<Scalars["Date"]["input"]>;
};

export type TechStackUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TechStackUpdateManyInput;
  /** Document search */
  where: TechStackWhereInput;
};

export type TechStackUpdateOneInlineInput = {
  /** Create and connect one TechStack document */
  create?: InputMaybe<TechStackCreateInput>;
  /** Delete currently connected TechStack document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single TechStack document */
  update?: InputMaybe<TechStackUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TechStack document */
  upsert?: InputMaybe<TechStackUpsertWithNestedWhereUniqueInput>;
};

export type TechStackUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TechStackUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TechStackWhereUniqueInput;
};

export type TechStackUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TechStackUpdateInput;
  /** Unique document search */
  where: TechStackWhereUniqueInput;
};

export type TechStackUpsertInput = {
  /** Create document if it didn't exist */
  create: TechStackCreateInput;
  /** Update document if it exists */
  update: TechStackUpdateInput;
};

export type TechStackUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TechStackUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TechStackWhereUniqueInput;
};

export type TechStackUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TechStackUpsertInput;
  /** Unique document search */
  where: TechStackWhereUniqueInput;
};

/** Identifies documents */
export type TechStackWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechStackWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechStackWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechStackWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  experience?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  experience_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  experience_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  experience_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  experience_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  experience_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  experience_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  experience_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  media?: InputMaybe<AssetWhereInput>;
  since?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than the given value. */
  since_gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values greater than or equal the given value. */
  since_gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are contained in given list. */
  since_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** All values less than the given value. */
  since_lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values less than or equal the given value. */
  since_lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  since_not?: InputMaybe<Scalars["Date"]["input"]>;
  /** All values that are not contained in given list. */
  since_not_in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
};

/** References TechStack record uniquely */
export type TechStackWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity &
  Node & {
    __typename?: "User";
    /** The time the document was created */
    createdAt: Scalars["DateTime"]["output"];
    /** Get the document in other stages */
    documentInStages: Array<User>;
    /** The unique identifier */
    id: Scalars["ID"]["output"];
    /** Flag to determine if user is active or not */
    isActive: Scalars["Boolean"]["output"];
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind;
    /** The username */
    name: Scalars["String"]["output"];
    /** Profile Picture url */
    picture?: Maybe<Scalars["String"]["output"]>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"]["output"];
  };

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: "UserConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: "UserEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = "APP_TOKEN",
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Version = {
  __typename?: "Version";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  revision: Scalars["Int"]["output"];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars["ID"]["input"];
  revision: Scalars["Int"]["input"];
  stage: Stage;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  JsonPathExists = "json_path_exists",
  JsonValueRecursive = "json_value_recursive",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
  UnionEmpty = "union_empty",
  UnionEvery = "union_every",
  UnionNone = "union_none",
  UnionSingle = "union_single",
  UnionSome = "union_some",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  SchedulePublish = "schedulePublish",
  ScheduleUnpublish = "scheduleUnpublish",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type GetAppsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAppsQuery = {
  __typename?: "Query";
  apps: Array<{
    __typename?: "App";
    id: string;
    fullname?: string | null;
    nickname?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    avatar?: { __typename?: "Asset"; url: string } | null;
    about?: { __typename?: "RichText"; markdown: string; text: string } | null;
    greeting?: { __typename?: "RichText"; markdown: string } | null;
    menu: Array<{
      __typename?: "Menu";
      label?: string | null;
      pathname?: string | null;
      slug?: string | null;
      href?: string | null;
    }>;
    socials: Array<{
      __typename?: "Social";
      id: string;
      label?: string | null;
      link?: string | null;
      icon?: string | null;
    }>;
    technologies: Array<{
      __typename?: "TechStack";
      id: string;
      label?: string | null;
      link?: string | null;
      media?: { __typename?: "Asset"; id: string; url: string } | null;
    }>;
  }>;
};

export const GetAppsDocument = gql`
  query GetApps {
    apps {
      id
      avatar {
        url
      }
      fullname
      nickname
      email
      phoneNumber
      about {
        markdown
        text
      }
      greeting {
        markdown
      }
      menu {
        label
        pathname
        slug
        href
      }
      socials: social {
        id
        label
        link
        icon
      }
      technologies: technology(first: 100) {
        id
        label
        link
        media {
          id
          url
        }
      }
    }
  }
`;

/**
 * __useGetAppsQuery__
 *
 * To run a query within a React component, call `useGetAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAppsQuery, GetAppsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAppsQuery, GetAppsQueryVariables>(
    GetAppsDocument,
    options
  );
}
export function useGetAppsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAppsQuery, GetAppsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAppsQuery, GetAppsQueryVariables>(
    GetAppsDocument,
    options
  );
}
export function useGetAppsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAppsQuery,
    GetAppsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAppsQuery, GetAppsQueryVariables>(
    GetAppsDocument,
    options
  );
}
export type GetAppsQueryHookResult = ReturnType<typeof useGetAppsQuery>;
export type GetAppsLazyQueryHookResult = ReturnType<typeof useGetAppsLazyQuery>;
export type GetAppsSuspenseQueryHookResult = ReturnType<
  typeof useGetAppsSuspenseQuery
>;
export type GetAppsQueryResult = Apollo.QueryResult<
  GetAppsQuery,
  GetAppsQueryVariables
>;
