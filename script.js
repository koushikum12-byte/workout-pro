// Diet plans data

// Try on window load
window.addEventListener("load", function () {
  // Check if user is logged in
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  // Display user email
  const usernameEl = document.getElementById("username");
  if (usernameEl) {
    usernameEl.textContent = "User: " + currentUser.email;
  }
});

let completedCount = 0;
const totalDays = 50;

const dietPlans = [
  
  {
    id: 0,
    name: "Muscle Breakfast",
    desc: "Complex carbs & egg whites.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    macros: ["500 kcal", "40g P"],
    recipe:
      "Mix 1 cup oats with 6 egg whites. Scramble or cook as a pancake. Add berries.",
  },
  {
    id: 1,
    name: "Anabolic Lunch",
    desc: "Lean poultry with jasmine rice.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["650 kcal", "50g P"],
    recipe:
      "Grilled 200g chicken breast. 1.5 cups rice. Season with salt, pepper, and lime.",
  },
  {
    id: 2,
    name: "Restorative Dinner",
    desc: "Fatty acids & micronutrients.",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
    macros: ["550 kcal", "35g P"],
    recipe:
      "Oven-baked salmon (180g) at 400°F for 12 mins. Serve with asparagus and lemon.",
  },
  {
    id: 3,
    name: "Power Snack",
    desc: "Quick energy boost.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    macros: ["300 kcal", "25g P"],
    recipe:
      "Blend 1 scoop whey protein with 1 banana and 1 tbsp peanut butter. Add water or milk.",
  },
  {
    id: 4,
    name: "Greek Yogurt Parfait",
    desc: "Protein-rich with granola crunch.",
    img: "https://images.unsplash.com/photo-1488477807830-63789f68bb65?w=500",
    macros: ["380 kcal", "35g P"],
    recipe:
      "Layer 200g Greek yogurt with 50g granola and 100g mixed berries. Drizzle honey.",
  },
  {
    id: 5,
    name: "Broccoli",
    desc: "Iron-rich lean with vegetables.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["600 kcal", "55g P"],
    recipe: "Stir-fry 300g broccoli. Use garlic, soy sauce, and ginger.",
  },
  {
    id: 6,
    name: "Tuna Salad Bowl",
    desc: "Omega-3s with fresh vegetables.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["420 kcal", "48g P"],
    recipe:
      "Mix 200g canned tuna with mixed greens, cucumber, tomatoes, and olive oil dressing.",
  },
  {
    id: 7,
    name: "Turkey Meatballs",
    desc: "Lean protein with whole grain pasta.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["580 kcal", "52g P"],
    recipe:
      "Bake 250g turkey meatballs at 400°F for 20 mins. Serve with whole wheat pasta.",
  },
  {
    id: 8,
    name: "Egg White Omelet",
    desc: "Low-fat protein-packed breakfast.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    macros: ["300 kcal", "45g P"],
    recipe:
      "Whisk 8 egg whites with spinach, mushrooms, and cheese. Cook in non-stick pan.",
  },
  {
    id: 9,
    name: "Quinoa Power Bowl",
    desc: "Complete amino acid profile.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["520 kcal", "40g P"],
    recipe:
      "Cook 1 cup quinoa. Top with grilled chicken, black beans, corn, and lime vinaigrette.",
  },
  {
    id: 10,
    name: "Tilapia & Sweet Potato",
    desc: "Lean fish with complex carbs.",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
    macros: ["480 kcal", "42g P"],
    recipe:
      "Bake 200g tilapia at 375°F for 15 mins. Serve with baked sweet potato and steamed broccoli.",
  },
  {
    id: 11,
    name: "Cottage Cheese Bowl",
    desc: "Slow-digesting casein protein.",
    img: "https://images.unsplash.com/photo-1488477807830-63789f68bb65?w=500",
    macros: ["350 kcal", "38g P"],
    recipe:
      "Mix 250g cottage cheese with fresh pineapple chunks and a drizzle of honey.",
  },
  {
    id: 12,
    name: "Chicken & Vegetables",
    desc: "Classic bodybuilding meal.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["620 kcal", "58g P"],
    recipe:
      "Grill 250g chicken breast. Pair with roasted carrots, zucchini, and brown rice.",
  },
  {
    id: 13,
    name: "Shrimp Pasta",
    desc: "Lightweight protein option.",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
    macros: ["500 kcal", "44g P"],
    recipe:
      "Sauté 250g shrimp with garlic and olive oil. Toss with whole wheat pasta and spinach.",
  },
  {
    id: 14,
    name: "Oatmeal Power Mix",
    desc: "Sustained energy release.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    macros: ["480 kcal", "22g P"],
    recipe:
      "Cook 1 cup oats with almond milk. Top with banana, almond butter, and honey.",
  },
  {
    id: 15,
    name: "Lean Ground Turkey",
    desc: "Versatile poultry base.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["540 kcal", "50g P"],
    recipe:
      "Brown 220g ground turkey with onions and garlic. Serve over brown rice with salsa.",
  },
  {
    id: 16,
    name: "Protein Pancakes",
    desc: "High-protein sweet treat.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    macros: ["420 kcal", "35g P"],
    recipe:
      "Mix 1 scoop protein powder with 2 eggs and 1/2 cup oats. Cook as pancakes. Top with berries.",
  },
  {
    id: 17,
    name: "Steak & Potatoes",
    desc: "Iron and B-vitamins loaded.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["680 kcal", "60g P"],
    recipe:
      "Grill 200g lean steak. Serve with baked potato, asparagus, and light butter.",
  },
  {
    id: 18,
    name: "Protein Smoothie",
    desc: "Quick meal on-the-go.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    macros: ["360 kcal", "30g P"],
    recipe:
      "Blend 1.5 scoops protein powder with oats, banana, berries, and milk of choice.",
  },
  {
    id: 19,
    name: "Baked Cod",
    desc: "White fish delicate flavor.",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
    macros: ["450 kcal", "46g P"],
    recipe:
      "Bake 220g cod at 400°F for 12 mins. Season with lemon, herbs, and pair with vegetables.",
  },
  {
    id: 20,
    name: "Turkey & Sweet Potato",
    desc: "Lean protein with nutrition.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    macros: ["560 kcal", "48g P"],
    recipe:
      "Bake 220g turkey breast with roasted sweet potato, green beans, and olive oil drizzle.",
  },
  {
    id: 21,
    name: "Whey Protein Oats",
    desc: "Muscle-building breakfast blend.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    macros: ["510 kcal", "42g P"],
    recipe:
      "Mix 1.5 scoops whey with 1 cup oats and milk. Add cinnamon and banana slices.",
  },
  {
    id: 22,
    name: "Grilled Fish Tacos",
    desc: "Lean protein in tortillas.",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
    macros: ["500 kcal", "46g P"],
    recipe:
      "Grill 200g white fish. Serve in whole wheat tortillas with cabbage slaw and lime.",
  },
];

const exercises = {
  Push: [
    {
      name: "Incline Bench Press",
      sets: "4 Sets",
      reps: "12",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200",
    },
    {
      name: "Dumbbell Press",
      sets: "3 Sets",
      reps: "10",
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=200",
    },
  ],
  Pull: [
    {
      name: "Lat Pulldowns",
      sets: "4 Sets",
      reps: "10",
      img: "https://images.unsplash.com/photo-1594737625785-7f6f0b3f3b2b?w=200",
    },
    {
      name: "Barbell Rows",
      sets: "4 Sets",
      reps: "12",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef03a74010?w=200",
    },
  ],
  Legs: [
    {
      name: "High Bar Squats",
      sets: "4 Sets",
      reps: "10",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200",
    },
    {
      name: "Leg Press",
      sets: "3 Sets",
      reps: "12",
      img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=200",
    },
  ],
  Rest: [
    {
      name: "Rest Day - No Exercises",
      sets: "-",
      reps: "-",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200",
    },
  ],
};

function initApp() {
  const workoutPage = document.getElementById("workout-page");
  const workoutCats = [
    {
      title: "Hypertrophy Push",
      type: "Push",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    },
    {
      title: "Strength Pull",
      type: "Pull",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    },
    {
      title: "Leg Annihilation",
      type: "Legs",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    },
    {
      title: "Biceps Blast",
      type: "Pull",
      img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=500",
    },
    
    
    
  
  ];

  for (let i = 0; i < workoutCats.length; i++) {
    const isRest = i % 7 === 0;
    const cat = workoutCats[i];
    workoutPage.innerHTML += `
                    <div class="card" id="card-${i}">
                        <div class="img-container">
                            <img src="${cat.img}" class="card-img">
                        </div>
                        <div class="card-body">
                            <span class="day-label">PHASE 01 // DAY ${i}</span>
                            <h3 style="margin:5px 0 20px 0;">${cat.title}</h3>
                            <div class="btn-group">
                                <button class="action-btn" onclick="markDone(${i})">DONE</button>
                                <button class="more-btn" onclick="showWorkoutDetails('${cat.type}', ${i})">PLAN</button>
                            </div>
                        </div>
                    </div>`;
  }

  const dietPage = document.getElementById("diet-page");
  dietPage.innerHTML = dietPlans
    .map(
      (plan) => `
                <div class="card">
                    <div class="img-container"><img src="${
                      plan.img
                    }" class="card-img"></div>
                    <div class="card-body">
                        <h3 style="margin:0 0 10px 0; color:var(--primary-red);">${
                          plan.name
                        }</h3>
                        <p style="color:var(--text-gray); font-size:0.85rem; margin-bottom:15px;">${
                          plan.desc
                        }</p>
                        <div class="macro-container">${plan.macros
                          .map((m) => `<span class="macro-tag">${m}</span>`)
                          .join("")}</div>
                        <button class="action-btn" style="width:100%" onclick="showRecipe(${
                          plan.id
                        })">PREP INSTRUCTIONS</button>
                    </div>
                </div>
            `
    )
    .join("");
}

function markDone(day) {
  const btn = document.querySelector(`#card-${day} .action-btn`);
  btn.classList.toggle("completed");
  btn.innerText = btn.classList.contains("completed") ? "COMPLETED ✓" : "DONE";
  const done = document.querySelectorAll(
    "#workout-page .action-btn.completed"
  ).length;
  document.getElementById("total-done").innerText = done;
  document.getElementById("perc").innerText =
    Math.round((done / 4) * 100) + "%";
}

function showWorkoutDetails(type, day) {
  document.getElementById(
    "modalTitle"
  ).innerText = `Day ${day}: ${type} Session`;
  document.getElementById("modalBody").innerHTML = exercises[type]
    .map(
      (ex) => `
                <div class="exercise-row">
                    <img src="${ex.img}" class="ex-thumb">
                    <div>
                        <div style="font-weight:bold">${ex.name}</div>
                        <div style="color:var(--primary-red); font-size:0.8rem;">${ex.sets} | ${ex.reps} Reps</div>
                    </div>
                </div>
            `
    )
    .join("");
  openModal();
}

function showRecipe(id) {
  const plan = dietPlans[id];
  document.getElementById("modalTitle").innerText = plan.name;
  document.getElementById("modalBody").innerHTML = `
                <img src="${plan.img}" style="width:100%; border-radius:15px; margin-bottom:15px;">
                <div class="recipe-box">${plan.recipe}</div>
            `;
  openModal();
}

function switchPage(page) {
  document.getElementById("workout-page").style.display =
    page === "workout" ? "grid" : "none";
  document.getElementById("diet-page").style.display =
    page === "diet" ? "grid" : "none";
  document
    .getElementById("tab-workout")
    .classList.toggle("active", page === "workout");
  document
    .getElementById("tab-diet")
    .classList.toggle("active", page === "diet");
  window.scrollTo(0, 0);
}

function openModal() {
  document.getElementById("appModal").style.display = "block";
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("appModal").style.display = "none";
  document.body.classList.remove("modal-open");
}

function closeOnOutsideClick(e) {
  if (e.target.classList.contains("modal")) closeModal();
}

function handleLogout() {
  // Sign out and clear auth
  firebaseSignOut();
  // Clear any local storage
  localStorage.removeItem("currentUser");
  localStorage.removeItem("loginTime");
  // Redirect to login page
  window.location.href = "login.html";
}

window.onload = initApp;
