{
    "Program" : [
        {"Var" : "x"},
        {"Var" : "y"},
        {"While" : [
            {"Minus" : ["y", 5]},
            [
                {"Var" : "y"},
                {"Read" : "x"},
                {"Read" : "y"},
                {"Assign" : ["x", {
                    "Times" : [2, {
                        "Plus" : [3, "y"]
                    }]
                }]}
            ]
        ]}
        {"Write" : 5}
    ]
}