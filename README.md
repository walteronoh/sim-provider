<!-- ![Logo](assets/logo.png?raw=true "Logo") -->
<div align="center"><img src="dist/assets/logo.png" alt="Logo" width="200"/></div>
<h1 align="center">Sim Provider</h1>
A package used to show simcard providers

```
Supported countries 
🇰🇪 🇺🇬 🇹🇿
```

## Usage

with `cdn`:

```bash
<script src="https://cdn.jsdelivr.net/npm/sim-provider/dist/bundle.min.js"></script>
```

with `npm`:

```bash
npm install sim-provider
```

with `yarn`:

```bash
yarn add sim-provider
```

Import the packages
using `require`:

```bash
// Using require
const { getProviderName, getCountryProviderData, validateCountrySimProvider, validateSimProvider } = require('sim-provider');
```

using `import (ES6 module syntax)`:

```bash
// Using import (ES6 module syntax)
import { getProviderName, getCountryProviderData, validateCountrySimProvider, validateSimProvider } from 'sim-provider';
```

## Available Methods

1. `getProviderName(phoneNumber)` -> This method takes a phone number as input and returns the name of the SIM card provider associated with that phone number.
   ```bash
   const { getProviderName } = require('sim-provider');

   const phoneNumber = '+254712345678';
   const { name: providerName, regex } = getProviderName(phoneNumber);
   console.log(`Provider Name: ${providerName}, Regex: ${regex}`);

   ```
2. `getCountryProviderData(country)` -> This method takes a country as input and retrieves data related to SIM card providers in that specific country. This data may include a list of available providers, their coverage areas, and other relevant information.
   ```bash
   const { getCountryProviderData } = require('sim-provider');

   const country = 'Kenya';
   const providerData = getCountryProviderData(country);
   console.log(`Provider Data for ${country}:`, providerData);

   ```
3. `validateCountrySimProvider(country, phoneNumber)` -> This method validates whether a given phone number belongs to a SIM card provider in a specified country. It checks if the phone number is valid for the country and if it corresponds to a known provider.
   ```bash
   const { validateCountrySimProvider } = require('sim-provider');

   const country = 'Kenya';
   const phoneNumber = '+254712345678';
   const isValid = validateCountrySimProvider(country, phoneNumber);
   console.log(`Is Valid for ${country}: ${isValid}`);

   ```
4. `validateSimProvider(country, providerName, phonenumber)` -> This method validates whether a given phone number is associated with a specific SIM card provider in a particular country. It checks if the phone number is valid for the country and if it matches the specified provider name.
   ```bash
   const { validateSimProvider } = require('sim-provider');

   const country = 'Kenya';
   const providerName = 'Safaricom';
   const phoneNumber = '+254712345678';
   const isValid = validateSimProvider(country, providerName, phoneNumber);
   console.log(`Is Valid for ${country} and ${providerName}: ${isValid}`);

   ```

## Development
### Would you like to contibute?
clone repo:

```bash
git clone https://github.com/walteronoh/sim-provider.git
```
change directory to project root:
```bash
cd sim-provider
```
Install app dependencies:

1. with `npm`:

   ```bash
   npm install
   ```

   ```bash
   npm start
   ```

2. with `yarn`:

   ```bash
   yarn
   ```

   ```bash
   yarn start
   ```
  
