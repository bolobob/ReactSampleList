import { Autocomplete, TextField } from "@mui/material";

const optionsByGroupsA = [
  {
    name: "A",
    options: [
      {
        id: 1,
        name: "a1",
      },
      {
        id: 2,
        name: "a2",
      },
      {
        id: 3,
        name: "a3",
      },
    ],
  },
  {
    name: "B",
    options: [
      {
        id: 4,
        name: "b1",
      },
      {
        id: 5,
        name: "b2",
      },
      {
        id: 6,
        name: "b3",
      },
    ],
  },
];

const optionsByGroupsB = [
  {
    name: "A",
    options: [
      {
        id: 1,
        name: "a1",
      },
      {
        id: 2,
        name: "a2",
      },
    ],
  },
  {
    name: "B",
    options: [
      {
        id: 4,
        name: "b1",
      },
      {
        id: 5,
        name: "b2",
      },
      {
        id: 6,
        name: "b3",
      },
    ],
  },
  {
    name: "A",
    options: [
      {
        id: 3,
        name: "a3",
      },
    ],
  },
];

type Group = (typeof optionsByGroupsA)[number];

const convert = (group: Group) => {
  return group.options.map((option) => ({
    ...option,
    groupName: group.name,
  }));
};
export const AutocompleteGroupBy = () => {
  const optionsA = optionsByGroupsA.flatMap(convert);
  const optionsB = optionsByGroupsB.flatMap(convert);
  return (
    <>
      <div>
        <Autocomplete
          renderInput={(params) => <TextField label="OK" {...params} />}
          options={optionsA}
          getOptionLabel={(option) => option.name}
          groupBy={(option) => option.groupName}
        />
      </div>
      <div>
        <Autocomplete
          renderInput={(params) => <TextField label="NG" {...params} />}
          options={optionsB}
          getOptionLabel={(option) => option.name}
          groupBy={(option) => option.groupName}
        />
      </div>
    </>
  );
};
