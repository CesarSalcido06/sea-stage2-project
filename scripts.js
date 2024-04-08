/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const skincareProducts = {
    //start of cleansers
    cleansers: {
        ceraveFomaingCl: {
            name: "Cerave Foaming Facial Cleanser",
            price: "$16",
            texture: "Foaming",
            ingredients: ["Ceramides", "Niacinamide", "Hyaluronic Acid"],
            size: "16 ounces",
            skinType: ["All Skin Types", "Oily Skin"],
            description: "Indulge your skin with the refreshing CeraVe Foaming Facial Cleanser. Perfect for those with oilier skin types, this gentle yet effective cleanser harnesses the power of foaming formulas to thoroughly cleanse without stripping away essential moisture. Formulated with ceramides and hyaluronic acid, it helps maintain the skin's natural barrier while leaving it feeling refreshed and balanced. Say goodbye to excess oil and hello to a clean, radiant complexion with every wash.",
            image: "ceraveCl.png", // Image URL
        },
        kaleGreenCl: {
            name: "Kale + Green Tea Spinach Vitamins Cleanser",
            price: "$40",
            texture: "Gel",
            ingredients: ["Kale", "Spinach", "Green Tea"],
            size: "8 ounces",
            skinType: ["All Skin Types", "Oily Skin"],
            description: "Gel cleansers are also very adept at cutting through excess oil on the skin’s surface (and inside pores). But the downside of gel face washes is that many can be too drying, causing more harm than good.",
            image: "kaleCl.png", // Image URL
        },
        larochePosayCl: {
            name: "La Roche-Posay Hydrating Gentle Cleanser",
            price: "$30",
            texture: "Cream",
            ingredients: ["Glycerin", "Niacinamide", "Ceramides", "Prebiotic Thermal Water"],
            size: "13.5 ounces",
            skinType: ["Dry Skin", "Sensitive Skin"],
            description: "Eight experts recommended this cleanser from La Roche-Posay’s silky Toleriane line. It contains hydrating ceramides as well as niacinamide, an anti–inflammatory ingredient.",
            image: "larocheCl.png", // Image URL
        },
        ceraveHydratingCl: {
            name: "Cerave Hydrating Facial Cleanser",
            price: "$20",
            texture: "Cream",
            ingredients: ["Ceramides", "Glycerin", "Hyaluronic Acid", "Niacinamide"],
            size: "16 ounces",
            skinType: ["Dry Skin", "Sensitive Skin"],
            description: "CeraVe’s dermatologist-beloved hydrating cleanser is our pick for the best face wash for dry skin due to its creamy consistency, which will leave dry skin feeling nourished and hydrated.",
            image: "ceraveHydratingCl.png", // Image URL
        },
        oilFreeCl: {
            name: "Oil-Free Acne Wash",
            price: "$15",
            texture: "Gel",
            ingredients: ["Salicylic Acid"],
            size: "9.1 ounces",
            skinType: ["Acne-Prone Skin"],
            description: "If you’re prone to breaking out, you should strongly consider using a cleanser with an acne-fighting ingredient like salicylic acid, which reduces swelling and inflammation as it unclogs pores.",
            image: "oilfreeCl.png", // Image URL
        },
        ceraveAcneCl: {
            name: "Cerave Acne Foaming Cream Cleanser",
            price: "$15",
            texture: "Foaming",
            ingredients: ["Benzoyl Peroxide", "Hyaluronic Acid"],
            size: "5 ounces",
            skinType: ["Acne-Prone Skin"],
            description: "CeraVe Acne Foaming Cream Cleanser is specifically formulated to help fight acne while gently cleansing skin. Benzoyl peroxide, hyaluronic acid, and niacinamide help calm skin and address acne breakouts effectively.",
            image: "ceraveAcneCl.png", // Image URL
        },
        neutrogenaCl: {
            name: "Neutrogena Ultra Gentle Daily Cleanser",
            price: "$10",
            texture: "Foam",
            ingredients: ["Glycerin"],
            size: "16 ounces",
            skinType: ["Sensitive Skin"],
            description: "This Neutrogena cleanser is oil- and soap-free, which means it’s easy on sensitive skin. The formula contains something called “hydrophobically modified polymers,” which effectively cleanse and remove dirt and oil without disrupting the outer skin layer.",
            image: "neutrogenaCl.png", // Image URL
        },
        vanicreamCl: {
            name: "Vanicream Gentle Facial Cleanser",
            price: "$8",
            texture: "Cream",
            ingredients: ["Glycerin"],
            size: "8 ounces",
            skinType: ["Sensitive Skin"],
            description: "Several dermatologists suggest Vanicream’s gentle cleanser for those with allergies and other sensitivities because its products are free of sulfates, dyes, fragrance, masking fragrance, lanolin, parabens, and formaldehyde releasers.",
            image: "vanicreamCl.png", // Image URL
        },
        meleCl: {
            name: "Mele Gentle Hydrating Cleanser",
            price: "$25",
            texture: "Gel",
            ingredients: ["Glycerin"],
            size: "5 ounces",
            skinType: ["Hyperpigmentation"],
            description: "Hyperpigmentation is a skin reaction that can be triggered by inflammation and results in dark marks that are challenging to get rid of.",
            image: "meleCl.png", // Image URL
        },
        skinceuticalsPurifyingCleanser: {
            name: "SkinCeuticals Purifying Cleanser",
            price: "$40",
            texture: "Gel",
            ingredients: ["Glycerin", "Glycolic Acid", "Benzoic Acid"],
            size: "6.8 ounces",
            skinType: ["Hyperpigmentation"],
            description: ["Elevate your skincare routine with SkinCeuticals Purifying Cleanser, a rejuvenating gel formula designed to leave your skin feeling refreshed and revitalized. Infused with potent ingredients like glycolic acid and benzoic acid, this cleanser offers gentle exfoliation to encourage cell turnover and diminish scarring and hyperpigmentation. With each use, it effectively removes impurities while maintaining skin's natural moisture balance, leaving your complexion smooth, clear, and radiant. Experience the transformative power of advanced skincare with SkinCeuticals Purifying Cleanser."],
            image: "skinceuticalsCl.png", // Image URL
        },
    },
    //start of exfoliators
    exfoliators: {
        ceraveRenewingEx: {
            name: "Cerave Renewing SA Cleanser",
            price: "$15",
            type: "Chemical exfoliator",
            texture: "Gel",
            ingredients: ["Salicylic acid", "Hyaluronic acid", "Niacinamide"],
            skinType: ["All Skin Types"],
            description: "Cerave Renewing SA Cleanser is a gentle exfoliating cleanser formulated with salicylic acid, hyaluronic acid, and niacinamide. It provides gentle exfoliation paired with skin barrier support, suitable for most skin types.",
            image: "ceraveEx.png",
        },
        dermalogicaEx: {
            name: "Dermalogica Daily Microfoliant",
            price: "$50",
            type: "Physical and chemical exfoliator",
            texture: "Powder",
            ingredients: ["Rice powder", "Salicylic acid", "Phytic acid", "Colloidal oatmeal", "Allantoin"],
            skinType: ["All Skin Types"],
            description: "Dermalogica Daily Microfoliant is a powerful yet gentle exfoliator. When mixed with water, it forms a paste for both physical and chemical exfoliation, leaving the skin smooth and radiant.",
            image: "dermalogicaEx.png",
        },
        cetaphilExtraGentleScrub: {
            name: "Cetaphil Extra Gentle Daily Scrub",
            price: "$10",
            type: "Physical exfoliator",
            texture: "Scrub",
            ingredients: ["Micro-fine granules", "Glycerin", "Vitamin E"],
            skinType: ["Sensitive Skin"],
            description: "Cetaphil Extra Gentle Daily Scrub features micro-fine granules suitable for daily use, even for sensitive skin types. It provides gentle exfoliation, leaving the skin soft and smooth.",
            image: "cetaphilEx.png",
        },
        paulasChoiceExfoliate: {
            name: "Paula's Choice Exfoliate",
            price: "$25",
            type: "Chemical exfoliator",
            texture: "Liquid",
            ingredients: ["Salicylic acid", "Green tea"],
            skinType: ["Acne-Prone Skin"],
            description: "Paula's Choice Exfoliate is a salicylic acid toner that effectively targets blackheads and acne breakouts. It helps unclog pores and reduces inflammation, leaving the skin clearer and smoother.",
            image: "paulasChoiceEx.png",
        },
        versedWeekendGlow: {
            name: "Versed Weekend Glow",
            price: "$20",
            type: "Chemical exfoliator",
            texture: "Liquid",
            ingredients: ["Lactic acid", "Glycolic acid", "Azelaic acid", "Kojic acid", "Bearberry extract", "Vitamin C"],
            skinType: ["All Skin Types"],
            description: "Versed Weekend Glow is a budget-friendly brightening toner formulated with a blend of AHAs for gentle exfoliation and skin renewal. It helps improve skin texture and radiance.",
            image: "versedEx.png",
        },
        skinceuticalsGlycolic10: {
            name: "SkinCeuticals Glycolic 10 Renew Overnight",
            price: "$100",
            type: "Chemical exfoliator",
            texture: "Cream",
            ingredients: ["Glycolic acid", "Phytic acid", "Jojoba", "Vitamin E"],
            skinType: ["All Skin Types"],
            description: "SkinCeuticals Glycolic 10 Renew Overnight is a potent serum formulated with a high percentage of glycolic acid for cellular turnover. It helps reduce discoloration and signs of aging, leaving the skin smoother and more radiant.",
            image: "skinceuticalsEx.png",
        },
        ceraveNightlyExfoliating: {
            name: "Cerave Nightly Exfoliating Treatment",
            price: "$20",
            type: "Chemical exfoliator",
            texture: "Liquid",
            ingredients: ["Glycolic acid", "Lactic acid", "Ceramides", "Licorice root extract"],
            skinType: ["All Skin Types"],
            description: "Cerave Nightly Exfoliating Treatment is formulated with a blend of AHAs for gentle exfoliation and skin renewal. It helps improve skin texture and tone, leaving the skin soft and smooth.",
            image: "ceraveNightlyEx.png",
        },
        revisionPumpkinMask: {
            name: "Revision Pumpkin Enzyme Mask",
            price: "$35",
            type: "Physical and chemical exfoliator",
            texture: "Mask",
            ingredients: ["Pumpkin enzyme", "Pumpkin and cocoa powders", "Gold Brazilian clay", "Glycerin", "Jojoba", "Squalene"],
            skinType: ["All Skin Types"],
            description: "Revision Pumpkin Enzyme Mask provides gentle physical and chemical exfoliation. It helps remove dead skin cells and impurities, leaving the skin smooth and radiant.",
            image: "revisionEx.png",
        },
        theOrdinaryMasque: {
            name: "The Ordinary Exfoliator Masque",
            price: "$8",
            type: "Chemical exfoliator",
            texture: "Mask",
            ingredients: ["Salicylic acid", "Kaolin", "Charcoal powder", "4-t-Butylcyclohexanol"],
            skinType: ["Acne-Prone Skin"],
            description: "The Ordinary Exfoliator Masque is formulated with salicylic acid and kaolin to unclog pores and absorb excess oil. It helps improve skin clarity and texture, leaving the skin refreshed and balanced.",
            image: "theOrdinaryEx.png",
        },
        drDennisGrossAlphaBeta: {
            name: "Dr. Dennis Gross Alpha Beta Peel",
            price: "$150",
            type: "Chemical exfoliator",
            texture: "Pad",
            ingredients: ["Glycolic acid", "Salicylic acid", "Citric acid", "Lactic acid", "Malic acid", "Chamomile", "Retinol", "Green tea extract"],
            skinType: ["All Skin Types"],
            description: "Dr. Dennis Gross Alpha Beta Peel is a two-step product designed for medium chemical exfoliation. It helps improve skin texture and tone, reduce discoloration, and promote cellular turnover.",
            image: "drDennisGrossEx.png",
        },
    },
    // Add more skincare product categories (exfoliators, toners, serums, moisturizers) here...
};

// This function adds cards to the page to display the skincare products
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    // Loop through each category of skincare products
    for (const category in skincareProducts) {
        // Loop through each product within the category
        for (const productName in skincareProducts[category]) {
            const product = skincareProducts[category][productName];
            const nextCard = templateCard.cloneNode(true); // Copy the template card
            editCardContent(nextCard, product); // Edit content with product details
            cardContainer.appendChild(nextCard); // Add new card to the container
        }
    }
}

// This function edits the content of a card with the details of a skincare product
function editCardContent(card, product) {
    card.style.display = "block";
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = product.name;
    const cardImage = card.querySelector("img");
    cardImage.src = product.image;
    cardImage.alt = product.name + " Poster";
    const cardContent = card.querySelector(".card-content");
    cardContent.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name} Poster">
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Texture:</strong> ${product.texture}</p>
        <p><strong>Ingredients:</strong> ${product.ingredients.join(", ")}</p>
        <p><strong>Size:</strong> ${product.size}</p>
        <p><strong>Skin Type:</strong> ${product.skinType.join(", ")}</p>
        <p><strong>Description:</strong> ${product.description}</p>
    `;
}

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// This function handles the quote alert
function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

// This function removes the last card
function removeLastCard() {
    // You can implement removing cards if needed
}
