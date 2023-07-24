import os
import shutil

from_dir="E:/Downloads/Python/102"
to_dir="E:/Downloads/Python/103"

list_of_files=os.listdir (from_dir)

for file_name in list_of_files:
    name, extensions=os.path.splitext(file_name)
    if(extensions==''):
       continue 
    if(extensions in ['.gif', '.png', '.jpg', '.jpeg','.jfif']):
        path1=from_dir+'/'+file_name
        path2=to_dir+'/'+"image_files"
        path3=to_dir+'/'+"image_files"+'/'+file_name
        
        if (os.path.exists(path2)):
            shutil.move(path1, path3)
        else:
            os.makedirs (path2)
            shutil.move(path1, path3)