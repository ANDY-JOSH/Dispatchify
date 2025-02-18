import Usa from "@react-map/usa";
// import {usaMapping} from '@dispatchify/shared-utils/json/USA';

// const stateMap = new Map(usaMapping.map(({ name, abbreviation }) => [name, abbreviation]));



const usaMapping = [
  {
      "name": "Alabama",
      "abbreviation": "AL"
  },
  {
      "name": "Alaska",
      "abbreviation": "AK"
  },
  {
      "name": "American Samoa",
      "abbreviation": "AS"
  },
  {
      "name": "Arizona",
      "abbreviation": "AZ"
  },
  {
      "name": "Arkansas",
      "abbreviation": "AR"
  },
  {
      "name": "California",
      "abbreviation": "CA"
  },
  {
      "name": "Colorado",
      "abbreviation": "CO"
  },
  {
      "name": "Connecticut",
      "abbreviation": "CT"
  },
  {
      "name": "Delaware",
      "abbreviation": "DE"
  },
  {
      "name": "District Of Columbia",
      "abbreviation": "DC"
  },
  {
      "name": "Federated States Of Micronesia",
      "abbreviation": "FM"
  },
  {
      "name": "Florida",
      "abbreviation": "FL"
  },
  {
      "name": "Georgia",
      "abbreviation": "GA"
  },
  {
      "name": "Guam",
      "abbreviation": "GU"
  },
  {
      "name": "Hawaii",
      "abbreviation": "HI"
  },
  {
      "name": "Idaho",
      "abbreviation": "ID"
  },
  {
      "name": "Illinois",
      "abbreviation": "IL"
  },
  {
      "name": "Indiana",
      "abbreviation": "IN"
  },
  {
      "name": "Iowa",
      "abbreviation": "IA"
  },
  {
      "name": "Kansas",
      "abbreviation": "KS"
  },
  {
      "name": "Kentucky",
      "abbreviation": "KY"
  },
  {
      "name": "Louisiana",
      "abbreviation": "LA"
  },
  {
      "name": "Maine",
      "abbreviation": "ME"
  },
  {
      "name": "Marshall Islands",
      "abbreviation": "MH"
  },
  {
      "name": "Maryland",
      "abbreviation": "MD"
  },
  {
      "name": "Massachusetts",
      "abbreviation": "MA"
  },
  {
      "name": "Michigan",
      "abbreviation": "MI"
  },
  {
      "name": "Minnesota",
      "abbreviation": "MN"
  },
  {
      "name": "Mississippi",
      "abbreviation": "MS"
  },
  {
      "name": "Missouri",
      "abbreviation": "MO"
  },
  {
      "name": "Montana",
      "abbreviation": "MT"
  },
  {
      "name": "Nebraska",
      "abbreviation": "NE"
  },
  {
      "name": "Nevada",
      "abbreviation": "NV"
  },
  {
      "name": "New Hampshire",
      "abbreviation": "NH"
  },
  {
      "name": "New Jersey",
      "abbreviation": "NJ"
  },
  {
      "name": "New Mexico",
      "abbreviation": "NM"
  },
  {
      "name": "New York",
      "abbreviation": "NY"
  },
  {
      "name": "North Carolina",
      "abbreviation": "NC"
  },
  {
      "name": "North Dakota",
      "abbreviation": "ND"
  },
  {
      "name": "Northern Mariana Islands",
      "abbreviation": "MP"
  },
  {
      "name": "Ohio",
      "abbreviation": "OH"
  },
  {
      "name": "Oklahoma",
      "abbreviation": "OK"
  },
  {
      "name": "Oregon",
      "abbreviation": "OR"
  },
  {
      "name": "Palau",
      "abbreviation": "PW"
  },
  {
      "name": "Pennsylvania",
      "abbreviation": "PA"
  },
  {
      "name": "Puerto Rico",
      "abbreviation": "PR"
  },
  {
      "name": "Rhode Island",
      "abbreviation": "RI"
  },
  {
      "name": "South Carolina",
      "abbreviation": "SC"
  },
  {
      "name": "South Dakota",
      "abbreviation": "SD"
  },
  {
      "name": "Tennessee",
      "abbreviation": "TN"
  },
  {
      "name": "Texas",
      "abbreviation": "TX"
  },
  {
      "name": "Utah",
      "abbreviation": "UT"
  },
  {
      "name": "Vermont",
      "abbreviation": "VT"
  },
  {
      "name": "Virgin Islands",
      "abbreviation": "VI"
  },
  {
      "name": "Virginia",
      "abbreviation": "VA"
  },
  {
      "name": "Washington",
      "abbreviation": "WA"
  },
  {
      "name": "West Virginia",
      "abbreviation": "WV"
  },
  {
      "name": "Wisconsin",
      "abbreviation": "WI"
  },
  {
      "name": "Wyoming",
      "abbreviation": "WY"
  }
]

const stateMap = new Map(usaMapping.map(({ name, abbreviation }) => [name, abbreviation]));

function logState(state: string | null, stateArr: string[] | undefined): void {
    if (!stateArr) return;

    const abbreviations = stateArr.map(state => stateMap.get(state) || state);
    const result = abbreviations.join(","); // Join abbreviations with commas
    
    navigator.clipboard.writeText(result)
    .catch(err => console.error("Failed to copy:", err));
    
}

const App = () => {
  return (
    <div className="w-3/4 my-8 mx-auto p-4 border-black border rounded-lg bg-slate-100">
        <Usa onSelect={logState} size={1024} hoverColor="orange" type="select-multiple" />
    </div>
  );
};

export default App;
