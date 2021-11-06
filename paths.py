import os

fileData = []

def make_data(dir):
    data = []
    now_dir = dir+"/"
    for res in os.listdir(now_dir):
        print(res)
        if not res.startswith("."):
            if os.path.isdir(now_dir+res):
                dirData = make_data(now_dir+res)
                data.append(dirData)
            else:
                data.append(res)
    return data

print(make_data("./data/img"))
