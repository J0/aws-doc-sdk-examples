// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { describe, beforeAll, afterAll, it, expect } from "vitest";

import { getUniqueName } from "@aws-sdk-examples/libs/utils/util-string.js";
import { createTemplate, deleteTemplate } from "../src/libs/sesUtils";
import { run } from "../src/ses_listtemplates";

describe("ses_listemplates", () => {
  const TEMPLATE_NAME = getUniqueName("TemplateName");

  beforeAll(async () => {
    await createTemplate(TEMPLATE_NAME);
  });

  afterAll(async () => {
    await deleteTemplate(TEMPLATE_NAME);
  });

  it("should successfully list templates", async () => {
    const result = await run();
    expect(result.TemplatesMetadata).toContainEqual(
      expect.objectContaining({ Name: TEMPLATE_NAME }),
    );
  });
});
