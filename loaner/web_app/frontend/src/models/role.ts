// Copyright 2018 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** Interface with fields that come from our Role API. */
export declare interface RoleApiParams {
  name?: string;
  associated_group?: string;
  permissions?: string[];
}

/** Interfaces with fields for our get request. */
export declare interface GetRoleRequestApiParams {
  name?: string;
}

/** Interfaces with fields for our list response from the backend. */
export declare interface ListRolesResponseApiParams {
  roles: RoleApiParams[];
}

/** Interfaces with fields for our list response. */
export declare interface ListRolesResponse {
  roles: Role[];
}

/** A role model with all properties and methods.  */
export class Role {
  /** Name of the Role. */
  name = '';
  /** The group we are associating this role with. */
  associatedGroup = '';
  /** Permissions we want to associate with this role. */
  permissions: string[] = [];

  /** Unique role identifier generated by the backend. */
  constructor(role: RoleApiParams = {}) {
    this.name = role.name || this.name;
    this.associatedGroup = role.associated_group || this.associatedGroup;
    this.permissions = role.permissions || this.permissions;
  }

  /** Translates the Role model object to the API message. */
  toApiMessage(): RoleApiParams {
    return {
      name: this.name,
      associated_group: this.associatedGroup,
      permissions: this.permissions,
    };
  }
}
