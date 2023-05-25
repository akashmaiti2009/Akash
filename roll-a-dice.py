import random

responce ="x"

while responce == "x":
    no=random.randint(1,4)
    
    if no == 1:
        print("[  0  ]")
        print("[=====]")
        print("[   0 ]")
        print("[0    ]")
    if no== 2:
        print("[=====]")
        print("[0    ]")
        print("[=====]")
        print("[ 0   ]")
    if no == 3:
        print("[0   0]")
        print("[ 00  ]") 
        print("[=====]")
        print("[   00]")
    if no == 4:
         print("[   0 ]")
         print("[0    ]")
         print("[=====]")
         print("[   00]")
         
    response=input("press y to roll again and n to exit:") 
    print("\n")                         