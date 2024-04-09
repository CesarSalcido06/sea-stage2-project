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
        }    
    },
    //start of exfoliators
    exfoliators: {
        ceraveRenewingEx: {
            name: "Cerave Renewing SA Cleanser",
            price: "$15",
            texture: "Gel",
            ingredients: ["Salicylic acid", "Hyaluronic acid", "Niacinamide"],
            size: "8 ounces",
            skinType: ["All Skin Types"],
            description: "Cerave Renewing SA Cleanser is a gentle exfoliating cleanser formulated with salicylic acid, hyaluronic acid, and niacinamide. It provides gentle exfoliation paired with skin barrier support, suitable for most skin types.",
            image: "ceraveEx.png",
        },
        dermalogicaEx: {
            name: "Dermalogica Daily Microfoliant",
            price: "$50",
            texture: "Powder",
            ingredients: ["Rice powder", "Salicylic acid", "Phytic acid", "Colloidal oatmeal", "Allantoin"],
            size: ".45 ounces",
            skinType: ["All Skin Types"],
            description: "Dermalogica Daily Microfoliant is a powerful yet gentle exfoliator. When mixed with water, it forms a paste for both physical and chemical exfoliation, leaving the skin smooth and radiant.",
            image: "dermalogicaEx.png",
        },
        cetaphilExtraGentleScrub: {
            name: "Cetaphil Extra Gentle Daily Scrub",
            price: "$10",
            texture: "Scrub",
            ingredients: ["Micro-fine granules", "Glycerin", "Vitamin E"],
            size: "6 ounces",
            skinType: ["Sensitive Skin"],
            description: "Cetaphil Extra Gentle Daily Scrub features micro-fine granules suitable for daily use, even for sensitive skin types. It provides gentle exfoliation, leaving the skin soft and smooth.",
            image: "cetaphilEx.png",
        },
        paulasChoiceExfoliate: {
            name: "Paula's Choice Exfoliate",
            price: "$25",
            texture: "Liquid",
            ingredients: ["Salicylic acid", "Green tea"],
            size: "4 ounces",
            skinType: ["Acne-Prone Skin"],
            description: "Paula's Choice Exfoliate is a salicylic acid toner that effectively targets blackheads and acne breakouts. It helps unclog pores and reduces inflammation, leaving the skin clearer and smoother.",
            image: "paulasChoiceEx.png",
        },
        versedWeekendGlow: {
            name: "Versed Weekend Glow",
            price: "$20",
            texture: "Liquid",
            ingredients: ["Lactic acid", "Glycolic acid", "Azelaic acid", "Kojic acid", "Bearberry extract", "Vitamin C"],
            size: "4 ounces",
            skinType: ["All Skin Types"],
            description: "Versed Weekend Glow is a budget-friendly brightening toner formulated with a blend of AHAs for gentle exfoliation and skin renewal. It helps improve skin texture and radiance.",
            image: "versedEx.png",
        },
        skinceuticalsGlycolic10: {
            name: "SkinCeuticals Glycolic 10 Renew Overnight",
            price: "$100",
            texture: "Cream",
            ingredients: ["Glycolic acid", "Phytic acid", "Jojoba", "Vitamin E"],
            size: "1.7 ounces",
            skinType: ["All Skin Types"],
            description: "SkinCeuticals Glycolic 10 Renew Overnight is a potent serum formulated with a high percentage of glycolic acid for cellular turnover. It helps reduce discoloration and signs of aging, leaving the skin smoother and more radiant.",
            image: "skinceuticalsEx.png",
        },
        ceraveNightlyExfoliating: {
            name: "Cerave Nightly Exfoliating Treatment",
            price: "$20",
            texture: "Liquid",
            ingredients: ["Glycolic acid", "Lactic acid", "Ceramides", "Licorice root extract"],
            size: "1.7 ounces",
            skinType: ["All Skin Types"],
            description: "Cerave Nightly Exfoliating Treatment is formulated with a blend of AHAs for gentle exfoliation and skin renewal. It helps improve skin texture and tone, leaving the skin soft and smooth.",
            image: "ceraveNightlyEx.png",
        },
        revisionPumpkinMask: {
            name: "Revision Pumpkin Enzyme Mask",
            price: "$35",
            texture: "Mask",
            ingredients: ["Pumpkin enzyme", "Pumpkin and cocoa powders", "Gold Brazilian clay", "Glycerin", "Jojoba", "Squalene"],
            size: "1.7 ounces",
            skinType: ["All Skin Types"],
            description: "Revision Pumpkin Enzyme Mask provides gentle physical and chemical exfoliation. It helps remove dead skin cells and impurities, leaving the skin smooth and radiant.",
            image: "revisionEx.png",
        },
        theOrdinaryMasque: {
            name: "The Ordinary Exfoliator Masque",
            price: "$13",
            texture: "Mask",
            ingredients: ["Salicylic acid", "Kaolin", "Charcoal powder", "4-t-Butylcyclohexanol"],
            size: "1.7 ounces",
            skinType: ["Acne-Prone Skin"],
            description: "The Ordinary Exfoliator Masque is formulated with salicylic acid and kaolin to unclog pores and absorb excess oil. It helps improve skin clarity and texture, leaving the skin refreshed and balanced.",
            image: "theOrdinaryEx.png",
        },
        drDennisGrossAlphaBeta: {
            name: "Dr. Dennis Gross Alpha Beta Peel",
            price: "$150",
            texture: "Pad",
            ingredients: ["Glycolic acid", "Salicylic acid", "Citric acid", "Lactic acid", "Malic acid", "Chamomile", "Retinol", "Green tea extract"],
            size: "N/A",
            skinType: ["All Skin Types"],
            description: "Dr. Dennis Gross Alpha Beta Peel is a two-step product designed for medium chemical exfoliation. It helps improve skin texture and tone, reduce discoloration, and promote cellular turnover.",
            image: "drDennisGrossEx.png",
        },  
    },
    //start of toners
    toners: {
        downToTo: {
            name: "Down To Tone Life Changing Toner",
            price: "$30",
            texture: "Liquid",
            ingredients: ["Phytic acid, malic acid, lactic acid, salicylic acid, citric acid, sugarcane, niacinamide, bilberry extract"],
            size: "5 ounces",
            skinType: ["All Skin Types"],
            image: "innbeautyTo.png"
        },
        elfTo: {
            name: "Elf Skin Pure Skin Toner",
            price:"$10",
            texture:"Liquid",
            ingredients: ["Oat milk, aloe juice, niacinamide, allantoin, hyaluronic acid"],
            size: "6.8 ounces",            
            skinType: ["All Skin Types"],
            description: "There’s so much goodness packed in this affordable toner that uses some of the same powerful ingredients—in this case soothing oat milk, aloe and niacinamide—as its pricer counterparts but at a fraction of the price. This gentle toner nourishes and moisturizes and helps support the skin’s barrier, resulting in glowing, gorgeous skin.",
            image: "elfTo.png"
        },
        lotionTo: {
            name: "Lotion P50 Biologique Recherche",
            price:"$100",
            texture:"Liquid",
            ingredients: ["Phytic Acid, phenol, lactic acid, salicylic acid, niacinamide"],
            size: "8.5 ounces",
            skinType: ["Normal to oily"],
            description: "French beauty brand Biologique Recherche is a favorite of every in-the-know beauty person, from editors to aestheticians to celebrities. A big part of that notoriety comes from the iconic Lotion P50.",
            image: "bioTo.png"
        },
        farmacyDeepTo: {
            name: "Farmacy Deep Sweep Toner",
            price:"$28",
            texture:"Liquid",
            ingredients: ["2% BHA (salicylic acid), moringa seed extract and moringa water, papaya enzymes, chlorella"],
            size: "5.4 ounces",
            skinType: ["Acne-prone, combination, oily skin"],
            description: "For those struggling with oily, acne-prone skin, Houshmand recommends Farmacy’s Deep Sweep because it’s “refreshing and helps to buff away dead skin to promote a brighter, healthier-looking surface that seems refined.” The toner gently exfoliates with salicylic acid and papaya enzymes to flush out impurities and oil without over stripping the skin.",
            image: "farmacyTo.png"
        },
        versedTo: {
            name: "Versed Weekend Glow Daoly Brightning Solution",
            price:"$20",
            texture:"Liquid",
            ingredients: ["Witch hazel, lactic acid, glycolic acid, azelaic acid, kojic acid, bearbetty extract, vitamin C"],
            size: "3.4 ounces",
            skinType: ["Mature, Acne-prone"],
            description: "Pesky dark spots, acne scars and uneven skin tone meet their match in this powerful formula that tackles skin concerns in multiple ways. The four-acid complex exfoliates dead skin cells, preventing clogged pores and encouraging collagen production. And natural skin brighteners like kojic acid, azelaic acid and bearberry extract—an alternative to the powerful brightening agent hydroquinone—lighten existing spots.",
            image: "versedTo.png"
        },
        oleHenriksenTo: {
            name: "Olegenriksen Balancing Force Oil Control Toner",
            price:"$29",
            texture:"Liquid",
            ingredients: ["Witch hazel, salicylic (BHA), glycolic and lactic acids (AHAs), Green Fusion Complex (a proprietary blend of botanicals), alpine willowherb extract, neem seed oil"],
            size: "6.42 ounces",
            skinType: ["Oily"],
            description: "Those with oily skin need a mattifier, and Ole Henriksen’s award-winning formulation works to do this in many ways. Salicylic, glycolic and lactic acids buff away pore-clogging dead skin cells and fight breakouts, while the brand’s proprietary Green Fusion Complex (a blend of botanicals including green tea, eucalyptus, algae and Irish moss extracts) helps to refine pores.",
            image: "oleHenriksenTo.png"
        },
        eltaTo: {
            name: "Elta md Skin Essence toner",
            price:"$35",
            texture:"Liquid",
            ingredients: ["AA complex, malachite extract, hydroxyacetophenone"],
            size: "6.10",
            skinType: ["Dry, Sensitive"],
            description: "EltaMD’s Skin Recovery Essence Toner is an ideal choice for those with dehydrated or irritated skin. This multitasker clears skin using malachite extract, a mineral-rich copper complex that protects it against environmental aggressors (and gives the product its natural blue color).",
            image: "eltaTo.png"
        },
        paulasChoiceTo: {
            name: "Paulas choice Nourishing Milky Toner",
            price:"$25",
            texture:"Liquid",
            ingredients: ["Allantoin, ophiopogon japonicus, marshmallow root extract, panthenol"],
            size: "5.10 ounces",
            skinType: ["Sensitive"],
            description: "Everything about Paula’s Choice’s Calm Nourishing Milky Toner was designed to help sensitive skin, including its milky texture that’s gentle and reduce inflammation. The formula contains ingredients like allantoin and marshmallow root extract that soothe reactive, red skin, while also hydrating and restoring its barrier so that it becomes more resilient over time.",
            image: "paulasTo.png"
        },
        alphaTo: {
            name: "Alpha H Liquid Gold",
            price:"$50",
            texture:"Liquid",
            ingredients: ["Glycolic acid, silk proteins, licorice root extract, glycerin"],
            size: "3.40 ounces",
            skinType: ["All, mature"],
            description: "Skip the in-office visit; this buzzy exfoliating toner can be your at-home chemical peel. A potent 5% glycolic acid (AHAs or liquid exfoliants that dissolve dead skin cells, resulting in cellular renewal) kickstarts brighter, smoother and more youthful-looking skin. Rounding out the formula are moisture-binding silk proteins to hydrate and licorice root extract to soothe and treat hyperpigmentation.",
            image: "alphaTo.png"
        }
    },
    //start of moisturizers
    moisturizers: {
        neutrogenaHydroBoost: {
            name: "Neutrogena Hydro Boost Water Gel",
            texture: "Gel-Cream",
            ingredients: ["Glycerin", "Hyaluronic Acid"],
            price: "$15",
            size: "1.7 ounces",
            skinType: ["All Skin Types", "Oily Skin"],
            description: "Indulge your skin with the refreshing Neutrogena Hydro Boost Water Gel. Perfect for those with oilier skin types, this gentle yet effective moisturizer hydrates the skin without leaving a greasy residue. Formulated with glycerin and hyaluronic acid, it replenishes moisture and locks it in, leaving the skin feeling soft, supple, and hydrated all day long.",
            image: "neutrogenaMoi.png"
        },
        skinfixBarrierLipid: {
            name: "Skinfix Barrier+ Lipid-Peptide Cream",
            texture: "Gel-Cream",
            ingredients: ["B-L3 lipid complex", "Niacinamide"],
            price: "$54",
            size: "1.7 ounces",
            skinType: ["All Skin Types", "Oily Skin"],
            description: "Skinfix Barrier+ Lipid-Peptide Cream is specially formulated to hydrate oily skin while balancing its natural barrier. The B-L3 lipid complex absorbs excess oil, while niacinamide helps to reduce the appearance of pores. This lightweight yet nourishing cream leaves the skin feeling refreshed and balanced without clogging pores.",
            image: "skinfixMoi.png"
        },
        vichyMineral89: {
            name: "Vichy Mineral 89 Daily Skin Booster Serum and Moisturizer",
            texture: "Lightweight cream",
            ingredients: ["Hyaluronic acid", "Mineral water", "Vitamins B3 & E", "Squalane"],
            price: "$32",
            size: "1.7 ounces",
            skinType: ["All Skin Types", "Oily Skin"],
            description: "Vichy Mineral 89 Daily Skin Booster Serum and Moisturizer combines the hydrating power of hyaluronic acid with the mineral-rich benefits of Vichy volcanic water to provide the ultimate moisture boost for the skin. This lightweight cream absorbs quickly and deeply hydrates, leaving the skin feeling plump, smooth, and refreshed.",
            image: "vichyMoi.png"
        },
        firstAidUltraRepair: {
            name: "First Aid Beauty Ultra Repair Cream",
            texture: "Cream",
            ingredients: ["Shea butter", "Allantoin", "Colloidal oatmeal"],
            price: "$36",
            size: "6 ounces",
            skinType: ["Dry Skin"],
            description: "First Aid Beauty Ultra Repair Cream is a rich, creamy moisturizer that deeply hydrates dry skin. Formulated with shea butter, allantoin, and colloidal oatmeal, it soothes and nourishes the skin while repairing its natural barrier. This non-comedogenic cream is gentle enough for sensitive skin and can be used all over the body.",
            image: "firstaidMoi.png"
        },
        ceraveMoisturizingCream: {
            name: "CeraVe Moisturizing Cream",
            texture: "Cream",
            ingredients: ["Glycerin", "Hyaluronic Acid", "Ceramides"],
            price: "$19",
            size: "19 ounces",
            skinType: ["Dry Skin", "Sensitive Skin"],
            description: "CeraVe Moisturizing Cream is a rich, hydrating moisturizer that replenishes dry skin. Enriched with glycerin, hyaluronic acid, and ceramides, it provides long-lasting hydration and helps to restore the skin's natural barrier. This fragrance-free cream is gentle enough for sensitive skin and can be used on the face and body.",
            image: "ceraveMoi.png"
        },
        aveneTolerance: {
            name: "Avène Tolerance Extreme Emulsion",
            texture: "Cream",
            ingredients: ["Glycerin", "Thermal Spring Water"],
            price: "$22",
            size: "1.3 ounces",
            skinType: ["Acne-Prone Skin"],
            description: "Avène Tolerance Extreme Emulsion is a soothing moisturizer specially formulated for sensitive, acne-prone skin. Enriched with nourishing plant triglycerides and Avène thermal spring water, it helps to calm irritation and restore the skin's natural balance. This lightweight cream absorbs quickly and leaves the skin feeling soft, smooth, and hydrated.",
            image: "aveneMoi.png"
        },
        differinOilControl: {
            name: "Differin Oil Control Moisturizer SPF 30",
            texture: "Lotion",
            ingredients: ["SPF 30", "Micropearls"],
            price: "$11",
            size: "4 ounces",
            skinType: ["Acne-Prone Skin"],
            description: "Differin Oil Control Moisturizer SPF 30 is a lightweight lotion that provides sun protection while controlling excess oil. Formulated with SPF 30 and micropearls, it absorbs oil and gives the skin a matte finish, making it ideal for acne-prone skin. This non-comedogenic moisturizer is gentle enough for daily use and won't clog pores.",
            image: "differinMoi.png"
        },
        vanicreamMoisturizer: {
            name: "Vanicream Moisturizing Cream",
            texture: "Lotion",
            ingredients: ["Hyaluronic Acid", "Ceramides", "Squalane", "Glycerin"],
            price: "$12",
            size: "3 ounces",
            skinType: ["Sensitive Skin"],
            description: "Vanicream Moisturizing Cream is a gentle, fragrance-free moisturizer that provides long-lasting hydration for sensitive skin. Enriched with hyaluronic acid, ceramides, squalane, and glycerin, it helps to restore the skin's natural moisture barrier and soothe irritation. This lightweight cream absorbs quickly and leaves the skin feeling soft, smooth, and nourished.",
            image: "vanicreamMoi.png"
        },
        aveenoCalming: {
            name: "Aveeno Ultra-Calming Daily Moisturizer SPF 30",
            texture: "Gel",
            ingredients: ["Prebiotic oat", "Feverfew", "Glycerin", "Panthenol"],
            price: "$17",
            size: "1.7 ounces",
            skinType: ["Sensitive Skin"],
            description: "Aveeno Ultra-Calming Daily Moisturizer SPF 30 is a lightweight gel moisturizer that provides sun protection while calming sensitive skin. Formulated with prebiotic oat, feverfew, glycerin, and panthenol, it helps to soothe and hydrate dry, sensitive, or irritated skin. This non-comedogenic moisturizer is gentle enough for daily use and won't clog pores.",
            image: "aveenoMoi.png"
        }
    }
};

// This function adds cards to the page to display the skincare products
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    // Loop through each category of skincare products
    for (const category in skincareProducts) {
        console.log("Category:", category);
        // Loop through each product within the category
        for (const productName in skincareProducts[category]) {
            console.log("Product Name:", productName);
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
        <button class="toggle-description-btn">Show Description</button>
        <p class="description hidden"><strong>Description:</strong> ${product.description}</p>
    `;

    // Add event listener to the button
    const toggleButton = cardContent.querySelector(".toggle-description-btn");
    const description = cardContent.querySelector(".description");
    
    toggleButton.addEventListener("click", function() {
        description.classList.toggle("hidden");
        if (description.classList.contains("hidden")) {
            toggleButton.textContent = "Show Description";
        } else {
            toggleButton.textContent = "Hide Description";
        }
    });
}

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
