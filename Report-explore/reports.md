# Report of Exploration tests

#### Test Environment

| Setting | Value |
| ---- | --- |
| Broser | Chrome 114.0.5735.106 |
| Screen Size | 1344x840 |
| OS | OS X 12.6.5 |
| Screen Size | https://qainterview.pythonanywhere.com/ |

---

## ID-1

### Title: 
`Page title typo`

### Description:
`When accessing to the test page, the tab is named “Factoriall” with an extra “L” at the end`

### Attachments:
![](./evidences/Picture1.png)
![](./evidences/Picture2.png)

---

## ID-2

### Title: 
`Page title typo`

### Description:
`When trying a negative number, the page doesn’t return any message. The server responds with a 500 but it should have been a 400 Bad Request. There should have been a condition that would catch non valid inputs, not only strings.`

### Attachments:
![](./evidences/Picture3.png)
![](./evidences/Picture4.png)

---

## ID-3

### Title: 
`Calculating a number higher than 171 is returning Infinity`

### Description:
`The calculator is returning "Infinity" as factorial of every number starting from 171, however posting directly the calculation to the API it returns the correct value`

### Attachments:
![](./evidences/Picture5.png)
![](./evidences/Picture6.png)
![](./evidences/Picture9.png)

---

## ID-4

### Title: 
`Calculating any number higher than 991 is returning a 500 internal server error`

### Description:
`The calculator is returning 500 internal server error for numbers higher than 991`

### Attachments:
![](./evidences/Picture7.png)
![](./evidences/Picture8.png)

---

## ID-5

### Title: 
`For numbers higher that 21, the webpage is showing the exponential instead of natural number`

### Description:
`For numbers higher that 21, the webpage is showing the exponential instead of natural number, however the API is still returning the natural number`

### Attachments:
![](./evidences/Picture10.png)
![](./evidences/Picture11.png)
![](./evidences/Picture12.png)
