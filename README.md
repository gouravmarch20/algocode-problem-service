# LeetCode Problem Setting service

## routing

- /api/v1/problems/ping
  - because the route starts with /api
    /api -> /v1 -> /problems -> /ping
    apiRouter -> v1Router -> problemRouter -> problemController -> service layer

## avoid npm

- nodemon :: node --watch -- index.js
- avoid dotenv :: process.loadEnvFile() via process.env.X

<!-- create problem -->
<!-- {
    "title" : "Sample problem 3",
    "description" : "\n### Square of numbar \n\n ##  [image](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)",
    "testCases" : [
        {
            "input" : "3",
             "output" : "9"

        },
        {
            "input" : "6",
            "output" : "36"

        }
    ],
    "codeStubs":[
        {
            "language" :"JAVA",
            "startSnippet" :  "// Initial Template for Java\n\nimport java.io.*;\nimport java.util.*;\n\nclass GFG {\n\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n\n        int t = Integer.parseInt(br.readLine().trim());\n        while (t-- > 0) {\n            int n = Integer.parseInt(br.readLine().trim());\n            String[] str = br.readLine().trim().split(\" \");\n            int[] arr = new int[n - 1];\n            for (int i = 0; i < n - 1; i++) {\n                arr[i] = Integer.parseInt(str[i]);\n            }\n            Solution sln = new Solution();\n            System.out.println(sln.missingNumber(n, arr));\n        }\n    }\n}",
            "userSnippet" : "// User function Template for Java\nclass Solution {\n\n    // Note that the size of the array is n-1\n    int missingNumber(int n, int arr[]) {\n\n        // Your Code Here\n    }\n}"
        }
    ]

}  -->

AWS CONFIG
cd Downloads
cd aws
ssh -i ec2key.pem ubuntu@[65.0.125.129=>ipofec2]

sudo apt update -y

sudo apt install nodejs -y
sudo apt install npm -y
sudo npm install -g pm2 ==> to use pm2

git clone https://github.com/gouravmarch20/leetcode-evalutor.git

Ls —> cd go inside flow

    1. npm install

    2 . Vim .env
    replace env of was
    3. Env add in aws ==> security port ip4 , v6

npm run dev => test locally on ubuntu
pm2 start src/index.js
pm2 logs index

<!-- s2 :: redis server -->

sudo systemctl status redis-server ==> check

<!-- to take latest pull form git repo -->

git reset --hard
git pull origin main
npm install
pm2 restart index

<!-- frontend  -->

pm2 serve dist 3000 --name leet-code-fe ==> force at 3000 port , securtity group mai add
npm run build ==> make build

pm2 serve dist 3000 --name leet-code-fe --spa ==> ==> serve build+++ dynamic route

<!-- docker -->

— attach elastic ip address

Docker in evaluator ==> ubuntu —> digital ocena article

sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt install docker-ce
sudo systemctl status docker
sudo usermod -aG docker ${USER}
ubuntu@ip-172-31-7-17:~/leetcode-evalutor$ su - ${USER} ==> password of ec2
sudo systemctl restart docker



<!--  github action runner ==> linux ==> in aws server paste all steps to link-->

<!--  -->

 
<!-- to give permission in action.runner to run runner agent in mac-->
sudo ./svc.sh install  ==> new shell file

 ~/actions-runner$ sudo ./svc.sh install
 ~/actions-runner$ sudo ./svc.sh start

 <!-- get _work in action-runner folder -->