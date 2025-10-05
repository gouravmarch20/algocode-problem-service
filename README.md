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