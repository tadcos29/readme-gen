// Function to render the license badge to be placed near the beginning of the README

function renderLicenseBadge(license) {
  const licensePart=`[![License: ${license}]`
  const urlPart=renderLicenseLink(license);
  switch (license) {
    case 'MIT License':
      return `${licensePart}(https://img.shields.io/badge/License-MIT-yellow.svg)](${urlPart})`
    break;
    case 'Apache 2.0 License':
      return `${licensePart}(https://img.shields.io/badge/license-Apache_2-blue.svg)](${urlPart})`
    break;
    case 'GNU GPL':
      return `${licensePart}(https://img.shields.io/badge/License-GPLv3-blue.svg)](${urlPart})`
    break;
    case 'Mozilla Public License 2.0':
      return `${licensePart}(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${urlPart})`
    break;
    case 'ISC License':
      return `${licensePart}(https://img.shields.io/badge/License-ISC-blue.svg)](${urlPart})`
    break;
    case 'Microsoft Public License':
      return `${licensePart}(https://img.shields.io/badge/license-MS_PL-blue.svg)](${urlPart})`
    break;
    case 'None':
      return '';
    break;
    default:
      return '';
    break;

    }

}

// Function to render the license link

function renderLicenseLink(license) {
    switch (license) {
      case 'MIT License':
        return 'https://opensource.org/licenses/MIT'
      break;
      case 'Apache 2.0 License':
        return 'https://opensource.org/licenses/Apache-2.0'
      break;
      case 'GNU GPL':
        return 'https://www.gnu.org/licenses/gpl-3.0'
      break;
      case 'Mozilla Public License 2.0':
        return 'https://www.mozilla.org/en-US/MPL/2.0/'
      break;
      case 'ISC License':
        return 'https://opensource.org/license/isc-license-txt/'
      break;
      case 'Microsoft Public License':
        return 'https://opensource.org/license/ms-pl-html/'
      break;
      case 'None':
        return '';
      break;
      default:
        return '';
      break;

      }
}


//Function to render the license link if a license was chosen.

function renderLicenseSection(license) {
  if (!license || (license==='None')) {
    return '';
  } else {
    return `## License\n\n### Licensed under the [${license}](${renderLicenseLink(license)}).`
  }
    
}

//Function to generate markdown.
function generateMarkdown({sProjTitle,sProjDesc,sProjInstall,sProjUsage,sProjContribs, sProjTests, sProjLicense}) {
  return `
# ${sProjTitle}
${renderLicenseBadge(sProjLicense)}

## Table of Contents
[Introduction and Purpose](#introduction-and-purpose)

[Installation](#installation)

[Technical Overview and Usage](#technical-overview-and-usage)${(sProjContribs.length) ? '\n\n[Contributions](#contributions)':''}

[Tests and Dependencies](#tests-and-dependencies)

${(renderLicenseSection(sProjLicense)) ? '[License](#license)':''}

## Introduction and Purpose
  
  ${sProjDesc}

## Installation

${sProjInstall}

## Technical Overview and Usage

${sProjUsage}${(sProjContribs.length) ? '\n\n## '.concat('Contributions\n\n',sProjContribs) : ''}

## Tests and Dependencies

${sProjTests}

${renderLicenseSection(sProjLicense)}
`;
}

module.exports = generateMarkdown;
