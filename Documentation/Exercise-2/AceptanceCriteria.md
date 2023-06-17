### Acceptance criteria for the official Avalanche crypto faucet available at https://faucet.avax.network/

1. MetaMask wallet connection:
   - The faucet website should provide a connect wallet process.
   - User with a MetaMask wallet should be able to connect using MetaMask Wallet.
   - Before proceeding, user should agree with the terms of use and privacy policy
   - The faucet should wait until the confirmation of the MetaMask Wallet. 
     - An option to download core should be given to the user
     - If the user clicks outside of the waiting modal, the process is interrupted and the user should start over
   - A MetaMask notification should appear, listing the user wallets
   - When the user completes the connection process of the MetaMask wallet, the wallet address should be filled automatically on the Address field of the faucet. 

<br/>

2. Account Dashboard:
   - Upon access to the faucet, users should have access to an account dashboard.
   - The dashboard should provide multiple networks to switch.
   - For each network selected, the Select Token option should return only the expected tokens for said network. Bellow should be an information stating how many tokens are in the faucet balance
   - The address should only be filled after Wallet Connection process is done, otherwise it should be empty with a placeholder.
   - Request token button should be enabled when all the necessary fields are correctly filled.

<br/>

3. Token Distribution:
   - The faucet should provide a mechanism for users to request test tokens.
   - Depending on the faucet balance of the choosen token, the button to request tokens should display how many tokens can the user request..
   - The faucet should distribute test tokens to the user's specified wallet address.
   - A transaction ID should be visible and hyperlinked to the transaction details.
   - After adding the subnet to the wallet, the user should see the tokens distributed.

<br/>

4. Token Limitations:
   - There should be limitations on the number of test tokens a user can request within a given time period.
   - The faucet should enforce token distribution rules to prevent abuse and ensure fair distribution among users.

<br/>

6. Availability and Performance:
   - The faucet website should be accessible and available for users to access without significant downtime.
   - The faucet should handle user requests efficiently and provide a smooth user experience.

<br/>

7. Security:
   - The faucet website should implement appropriate security measures to protect user data and transactions.
   - User wallets and private keys should be stored securely and not accessible to unauthorized individuals.
   - The faucet should utilize encryption and follow best practices to ensure the safety of user information.
   - The data and system integrity should be secured from XSS and injection attacks

<br/>

10. Compliance with Blockchain Standards:
    - The faucet should follow the established standards and protocols of the Avalanche blockchain.
    - It should adhere to the guidelines and specifications set by the Avalanche development team.

<br/>

11. Error Handling:
    - The faucet should provide appropriate error messages for invalid token requests, such as invalid wallet addresses or exceeding token limits.
    - Error messages should be clear, descriptive, and help the user to understand how to resolve the issues.

These acceptance criteria ensure that the official Avalanche crypto faucet is user-friendly, secure, and reliable, enabling developers to obtain test tokens for testing, experimentation, and integration purposes.