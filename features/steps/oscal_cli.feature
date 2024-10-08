Feature: OSCAL CLI Wrapper

  Scenario: Detect OSCAL document type
    Given I have an OSCAL document "ssp.xml"
    When I detect the document type
    Then the document type should be "ssp"

  Scenario: Check OSCAL CLI installation
    When I check if OSCAL CLI is installed
    Then I should receive a boolean result

  Scenario: Install OSCAL CLI
    Given OSCAL CLI is not installed
    When I install OSCAL CLI
    Then OSCAL CLI should be installed

  Scenario: Execute OSCAL CLI command
    Given I have an OSCAL document "ssp.xml"
    When I execute the OSCAL CLI command "validate" on the document
    Then I should receive the execution result

  Scenario: Convert OSCAL document from XML to JSON
    Given I have an OSCAL document "ssp.xml"
    When I convert the document to JSON
    Then I should receive the conversion result
    And conversion result is a json

  Scenario: Convert OSCAL document from XML to YAML
    Given I have an OSCAL document "ssp.xml"
    When I convert the document to YAML
    Then I should receive the conversion result
    And conversion result is a yaml

  Scenario: Get sarif output invalid xml
    Given I have an OSCAL document "invalid-ssp.xml"
    When I validate with sarif output on the document
    Then I should receive the sarif output
    And we should have errors in the sarif output

  Scenario: Get sarif output for valid xml
    Given I have an OSCAL document "ssp.xml"
    When I validate with sarif output on the document
    Then I should receive the sarif output

  Scenario: Get sarif output for valid json
    Given I have an OSCAL document "ssp.json"
    When I validate with sarif output on the document
    Then I should receive the sarif output

  Scenario: Get sarif output for valid xml
    Given I have an OSCAL document "ssp.xml"
    Given I have an Metaschema extensions document "fedramp-external-constraints.xml"
    When I validate with metaschema extensions and sarif output on the document
    Then I should receive the sarif output

  Scenario: Get sarif output for valid xml
    Given I have an OSCAL document "invalid-ssp.xml"
    Given I have an Metaschema extensions document "fedramp-external-constraints.xml"
    When I validate with metaschema extensions and sarif output on the document
    Then I should receive the sarif output

  Scenario: validate javascript object inline
    Given I have an OSCAL document "ssp.json"
    When I validate with imported validate function
    Then I should receive a validation object

  Scenario: convert javascript object inline
    Given I have an OSCAL document "profile.xml"
    Given I want an OSCAL document "profile.json"
    When I convert it with imported convert function
    Then I should receive a valid json object

  Scenario: resolve an XML profile
    Given I have an OSCAL document "profile.xml"
    Given I want to resolve the profile
    When I resolve it with imported resolve function
    Then the resolved profile should be valid

  Scenario: evaluate a metapath
    Given I have an OSCAL document "ssp.xml"
    Given I want query with metapath "//user"
    When I query with the eval function
    Then the metapath evaluation should include "/system-implementation"
