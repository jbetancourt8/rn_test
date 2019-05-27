# React Native Test

## Goals
* Create a 2 screen app
* One screen for listing existing reservations. 
* Second screen for creating new reservation. 
* Tech Stack: React-Native, Apollo-Client, Jest/Enzyme, Typescript or Flow

## How To Use 
* Clone repo and install dependencies, `yarn` or `npm install`. 
* `react-native run-ios` or `react-native run-android`

## Explanation
* __First screen__ : displays a list of existing reservations. 

* It consist of a header, which has a title and button to create reservation. This button will navigate to the create reservation screen. React Navigation was used. 
* Below header a FlatList displays the customer's name, hotel, arrival and departure date for each reservation. 
* Data is queried from link provided using Apollo-Client and passed to FlatList. 

* __Second screen__: displays a form to create reservation. 

* It consist of a header, with title and button to navigate back to reservations screen. 
* Each TextInput data is stated in state and once user presses button, their entry will be displayed below. 
* Data is supposed to be mutated into existing list. 
* Unit testing was performed and failed due to: 
`Invariant Violation: fetch is not found globally and no fetcher passed, to fix pass a fetch foryour environment like https://www.npmjs.com/package/node-fetch.`

##Todo
* Complete mutation of data
* Resolve unit test issues
* Use Typescript of Flow 