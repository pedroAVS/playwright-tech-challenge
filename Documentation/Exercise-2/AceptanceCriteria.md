### Acceptance criteria for the official Avalanche crypto faucet available at https://faucet.avax.network/

1. MetaMask wallet connection:
   - The faucet website should provide a connect wallet process.
   - User with a MetaMask wallet should be able to connect using MetaMask Wallet.
   - Before proceeding, User should agree with the terms of use and privacy policy
   - The faucet should wait until the confirmation of the MetaMask Wallet. 
     - An option to download core should be given to the User
     - If the User clicks outside of the waiting modal, the process is interrupted and the User should start over (Confirm with PO if it should completly dismiss the dialog)
   - A MetaMask notification should appear, listing the User wallets
   - When the User completes the connection process of the MetaMask wallet, the wallet address should be filled automatically on the Address field of the faucet. 

<br/>

2. Request funds without connecting wallet:
   - The faucet should provide to the User the option to request funds without connecting the wallet
   - After typing the wallet address sucessfully, the option to request funds should be enabled
   - After requesting successfully a transaction ID should be visible and hyperlinked to the transaction details
   - The User should be able to see on the wallet the new funds correctly

<br/>

3. Add Subnet to Wallet
   - An option to add the subnet to the User wallet should be provided.
   - After clicking, the MetaMask notification asking for permission to the site to add a network should appear.
   - The network name, network URL, Chain ID and Currency symbol should be correcly displayed, depending on the selected network on the faucet.
   - By clicking the option to view all details, the User should view all the previous information with the block explorer URL also visible.
   - If the User approves the permission request, a confirmation should appear stating the current network and the new network the User is connecting to.
   - By clicking Switch network, the notification should close, and after opening the wallet, the new network should be present on the header. If the user has tokens they should be represented by the specified Currency symbol.

<br/>

4. View on Explorer
   - An option to view on explorer should be present
   - By clicking on it, the User should be taken to the explorer page of the network selected on the faucet
   - the name of the network should be visible, so that the client knows that he was redirected successfully

<br/>

5. Account Dashboard:
   - Upon access to the faucet, Users should have access to an account dashboard.
   - The dashboard should provide multiple networks to switch.
   - For each network selected, the Select Token option should return only the expected tokens for said network. Bellow should be an information stating how many tokens are in the faucet balance
   - The address should only be filled after Wallet Connection process is done, otherwise it should be empty with a placeholder.
   - Request token button should be enabled when all the necessary fields are correctly filled.

<br/>

6. Token Distribution:
   - The faucet should provide a mechanism for Users to request test tokens.
   - Depending on the faucet balance of the choosen token, the button to request tokens should display how many tokens can the User request..
   - The faucet should distribute test tokens to the User's specified wallet address.
   - A transaction ID should be visible and hyperlinked to the transaction details.
   - After adding the subnet to the wallet, the User should see the tokens distributed.

<br/>

7. Token Limitations:
   - There should be limitations on the number of test tokens a User can request within a given time period.
   - The faucet should enforce token distribution rules to prevent abuse and ensure fair distribution among Users.

<br/>

8. Availability and Performance:
   - The faucet website should be accessible and available for Users to access without significant downtime.
   - The faucet should handle User requests efficiently and provide a smooth User experience.

<br/>

9. Security:
   - The faucet website should implement appropriate security measures to protect User data and transactions.
   - User wallets and private keys should be stored securely and not accessible to unauthorized individuals.
   - The faucet should utilize encryption and follow best practices to ensure the safety of User information.
   - The data and system integrity should be secured from XSS and injection attacks

<br/>

10. Compliance with Blockchain Standards:
    - The faucet should follow the established standards and protocols of the Avalanche blockchain.
    - It should adhere to the guidelines and specifications set by the Avalanche development team.

<br/>

11. Error Handling:
    - The faucet should provide appropriate error messages for invalid token requests, such as invalid wallet addresses or exceeding token limits.
    - Error messages should be clear, descriptive, and help the User to understand how to resolve the issues.

These acceptance criteria ensure that the official Avalanche crypto faucet is User-friendly, secure, and reliable, enabling developers to obtain test tokens for testing, experimentation, and integration purposes.