function emailVerificationTemplate(token){
    return `<div><img alt="Logo Image"src=https://i.ibb.co/64P1tJP/Logo.png><h1 style="font-family:'DM Sans',sans-serif">Orebi E-commerce</h1><p style="font-family:'DM Sans',sans-serif">Please verify your email address</p> ${token}<button style="font-family:'DM Sans',sans-serif;background-color:#262626;color:#fff;padding:15px 25px;border:none;border-radius:8px;cursor:pointer">click for verification</button></div>`
}
module.exports = emailVerificationTemplate;