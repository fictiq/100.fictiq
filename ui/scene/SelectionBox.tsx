import React from 'react'
import { useState } from "react"
import { Select, Box, Text, rem } from "@mantine/core"


function SelectionBox() {



    const handleLibraryChange = (value, index) => {
        if (value) {
            const newLibraries = [...libraries]
            newLibraries[index] = value
            setLibraries(newLibraries)
        }
    }

    const libraryOptions = [
        { value: "Spouse", label: "Spouse" },
        { value: "Champion", label: "Champion" },
        { value: "Tyrant", label: "Tyrant" },
        { value: "Martyr", label: "Martyr" },
        { value: "Addict", label: "Addict" },
        { value: "Hag", label: "Hag" },
        { value: "Ambassador", label: "Ambassador" },
        { value: "Innocent", label: "Innocent" },
        { value: "Outlaw", label: "Outlaw" },
        { value: "Prophet", label: "Prophet" },
        { value: "Academic", label: "Academic" },
        { value: "Primal", label: "Primal" },
        { value: "Pastoral", label: "Pastoral" },
    ]



    const [libraries, setLibraries] = useState(["Angular", "Angular", "Angular"])

    var index = 0

    return (
        <div>

            <Box
                key={index}
                style={{
                    border: "2px solid black",
                    padding: rem(15),
                    backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F0F0F0",
                }}
            >
                <Text
                    style={{
                        fontFamily: "Courier New, monospace",
                        fontWeight: "bold",
                        marginBottom: rem(8),
                        textTransform: "uppercase",
                    }}
                >
                    INPUT {index + 1}: MESH
                </Text>
                <Select
                    placeholder="SEARCH MESH..."
                    value=""
                    onChange={(value) => handleLibraryChange(value, index)}
                    data={libraryOptions}
                    searchable
                    nothingFoundMessage="NO MESH FOUND"
                    styles={{
                        input: {
                            height: rem(45),
                            border: "2px solid black",
                            fontFamily: "Courier New, monospace",
                            fontSize: rem(14),
                            backgroundColor: "#FFFFFF",
                            "&:focus": {
                                border: "2px solid black",
                                outline: "none",
                                boxShadow: "none",
                            },
                        },
                        dropdown: {
                            border: "2px solid black",
                            borderRadius: 0,
                            boxShadow: "none",
                        },
                        item: {
                            fontFamily: "Courier New, monospace",
                            "&[data-selected]": {
                                backgroundColor: "black",
                                color: "white",
                            },
                        },
                    }}
                />
            </Box>


        </div>
    )
}

export default SelectionBox
