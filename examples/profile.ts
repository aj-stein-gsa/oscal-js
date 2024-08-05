import { OscalJsonPackage, Profile } from "../src/types";

export const profile:Profile={
    "merge" : {
      "as-is" : true
    },
    "metadata" : {
      "roles" : [ {
        "id" : "creator",
        "title" : "Document Creator"
      }, {
        "id" : "contact",
        "title" : "Contact"
      } ],
      "title" : "NIST Special Publication 800-53 Revision 5.1.1 HIGH IMPACT BASELINE",
      "responsible-parties" : [ {
        "role-id" : "creator",
        "party-uuids" : [ "c748c806-1d77-4695-bb40-e117b2afa82e" ]
      }, {
        "role-id" : "contact",
        "party-uuids" : [ "c748c806-1d77-4695-bb40-e117b2afa82e" ]
      } ],
      "last-modified" : "2024-02-04T23:16:00Z",
      "oscal-version" : "1.1.2",
      "parties" : [ {
        "name" : "Joint Task Force, Transformation Initiative",
        "uuid" : "c748c806-1d77-4695-bb40-e117b2afa82e",
        "addresses" : [ {
          "city" : "Gaithersburg",
          "addr-lines" : [ "National Institute of Standards and Technology", "Attn: Computer Security Division", "Information Technology Laboratory", "100 Bureau Drive (Mail Stop 8930)" ],
          "postal-code" : "20899-8930",
          "state" : "MD"
        } ],
        "email-addresses" : [ "sec-cert@nist.gov" ],
        "type" : "organization"
      } ],
      "version" : "5.1.1+u4"
    },
    "imports" : [ {
      "include-controls" : [ {
        "with-ids" : [ "ac-1", "ac-2", "ac-2.1", "ac-2.2", "ac-2.3", "ac-2.4", "ac-2.5", "ac-2.11", "ac-2.12", "ac-2.13", "ac-3", "ac-4", "ac-4.4", "ac-5", "ac-6", "ac-6.1", "ac-6.2", "ac-6.3", "ac-6.5", "ac-6.7", "ac-6.9", "ac-6.10", "ac-7", "ac-8", "ac-10", "ac-11", "ac-11.1", "ac-12", "ac-14", "ac-17", "ac-17.1", "ac-17.2", "ac-17.3", "ac-17.4", "ac-18", "ac-18.1", "ac-18.3", "ac-18.4", "ac-18.5", "ac-19", "ac-19.5", "ac-20", "ac-20.1", "ac-20.2", "ac-21", "ac-22", "at-1", "at-2", "at-2.2", "at-2.3", "at-3", "at-4", "au-1", "au-2", "au-3", "au-3.1", "au-4", "au-5", "au-5.1", "au-5.2", "au-6", "au-6.1", "au-6.3", "au-6.5", "au-6.6", "au-7", "au-7.1", "au-8", "au-9", "au-9.2", "au-9.3", "au-9.4", "au-10", "au-11", "au-12", "au-12.1", "au-12.3", "ca-1", "ca-2", "ca-2.1", "ca-2.2", "ca-3", "ca-3.6", "ca-5", "ca-6", "ca-7", "ca-7.1", "ca-7.4", "ca-8", "ca-8.1", "ca-9", "cm-1", "cm-2", "cm-2.2", "cm-2.3", "cm-2.7", "cm-3", "cm-3.1", "cm-3.2", "cm-3.4", "cm-3.6", "cm-4", "cm-4.1", "cm-4.2", "cm-5", "cm-5.1", "cm-6", "cm-6.1", "cm-6.2", "cm-7", "cm-7.1", "cm-7.2", "cm-7.5", "cm-8", "cm-8.1", "cm-8.2", "cm-8.3", "cm-8.4", "cm-9", "cm-10", "cm-11", "cm-12", "cm-12.1", "cp-1", "cp-2", "cp-2.1", "cp-2.2", "cp-2.3", "cp-2.5", "cp-2.8", "cp-3", "cp-3.1", "cp-4", "cp-4.1", "cp-4.2", "cp-6", "cp-6.1", "cp-6.2", "cp-6.3", "cp-7", "cp-7.1", "cp-7.2", "cp-7.3", "cp-7.4", "cp-8", "cp-8.1", "cp-8.2", "cp-8.3", "cp-8.4", "cp-9", "cp-9.1", "cp-9.2", "cp-9.3", "cp-9.5", "cp-9.8", "cp-10", "cp-10.2", "cp-10.4", "ia-1", "ia-2", "ia-2.1", "ia-2.2", "ia-2.5", "ia-2.8", "ia-2.12", "ia-3", "ia-4", "ia-4.4", "ia-5", "ia-5.1", "ia-5.2", "ia-5.6", "ia-6", "ia-7", "ia-8", "ia-8.1", "ia-8.2", "ia-8.4", "ia-11", "ia-12", "ia-12.2", "ia-12.3", "ia-12.4", "ia-12.5", "ir-1", "ir-2", "ir-2.1", "ir-2.2", "ir-3", "ir-3.2", "ir-4", "ir-4.1", "ir-4.4", "ir-4.11", "ir-5", "ir-5.1", "ir-6", "ir-6.1", "ir-6.3", "ir-7", "ir-7.1", "ir-8", "ma-1", "ma-2", "ma-2.2", "ma-3", "ma-3.1", "ma-3.2", "ma-3.3", "ma-4", "ma-4.3", "ma-5", "ma-5.1", "ma-6", "mp-1", "mp-2", "mp-3", "mp-4", "mp-5", "mp-6", "mp-6.1", "mp-6.2", "mp-6.3", "mp-7", "pe-1", "pe-2", "pe-3", "pe-3.1", "pe-4", "pe-5", "pe-6", "pe-6.1", "pe-6.4", "pe-8", "pe-8.1", "pe-9", "pe-10", "pe-11", "pe-11.1", "pe-12", "pe-13", "pe-13.1", "pe-13.2", "pe-14", "pe-15", "pe-15.1", "pe-16", "pe-17", "pe-18", "pl-1", "pl-2", "pl-4", "pl-4.1", "pl-8", "pl-10", "pl-11", "ps-1", "ps-2", "ps-3", "ps-4", "ps-4.2", "ps-5", "ps-6", "ps-7", "ps-8", "ps-9", "ra-1", "ra-2", "ra-3", "ra-3.1", "ra-5", "ra-5.2", "ra-5.4", "ra-5.5", "ra-5.11", "ra-7", "ra-9", "sa-1", "sa-2", "sa-3", "sa-4", "sa-4.1", "sa-4.2", "sa-4.5", "sa-4.9", "sa-4.10", "sa-5", "sa-8", "sa-9", "sa-9.2", "sa-10", "sa-11", "sa-15", "sa-15.3", "sa-16", "sa-17", "sa-21", "sa-22", "sc-1", "sc-2", "sc-3", "sc-4", "sc-5", "sc-7", "sc-7.3", "sc-7.4", "sc-7.5", "sc-7.7", "sc-7.8", "sc-7.18", "sc-7.21", "sc-8", "sc-8.1", "sc-10", "sc-12", "sc-12.1", "sc-13", "sc-15", "sc-17", "sc-18", "sc-20", "sc-21", "sc-22", "sc-23", "sc-24", "sc-28", "sc-28.1", "sc-39", "si-1", "si-2", "si-2.2", "si-3", "si-4", "si-4.2", "si-4.4", "si-4.5", "si-4.10", "si-4.12", "si-4.14", "si-4.20", "si-4.22", "si-5", "si-5.1", "si-6", "si-7", "si-7.1", "si-7.2", "si-7.5", "si-7.7", "si-7.15", "si-8", "si-8.2", "si-10", "si-11", "si-12", "si-16", "sr-1", "sr-2", "sr-2.1", "sr-3", "sr-5", "sr-6", "sr-8", "sr-9", "sr-9.1", "sr-10", "sr-11", "sr-11.1", "sr-11.2", "sr-12" ]
      } ],
      "href" : "#84cbf061-eb87-4ec1-8112-1f529232e907"
    } ],
    "uuid" : "ad6ca352-8b0e-40e7-b6e2-279706ef5456",
    "back-matter" : {
      "resources" : [ {
        "description" : "NIST Special Publication 800-53 Revision 5: Security and Privacy Controls for Federal Information Systems and Organizations",
        "uuid" : "84cbf061-eb87-4ec1-8112-1f529232e907",
      } ]
    }
  }
