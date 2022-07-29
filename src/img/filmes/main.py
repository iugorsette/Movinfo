import os, string

for file in os.listdir("."):
    if not ".py" in file:
        os.rename(file, file.replace(":", "").replace("-", "").replace("!", "").lower())