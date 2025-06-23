let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

const vehicleForm = document.getElementById("vehicleForm");
const vehicleList = document.getElementById("vehicleList");

function renderVehicles() {
    vehicleList.innerHTML = "";
    vehicles.forEach(vehicle => {
    const div = document.createElement("div");
    div.className = "vehicle-card";
    div.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.vehicleName}" />
        <div class="vehicle-info">
        <h3>${vehicle.vehicleName}</h3>
        <p><strong>Model:</strong> ${vehicle.model}</p>
        <p><strong>Brand:</strong> ${vehicle.brand}</p>
        <p><strong>Price:</strong> ₹${vehicle.price}</p>
        <p>${vehicle.desc}</p>
        </div>
        <div class="vehicle-actions">
        <button class="edit" onclick="editVehicle('${vehicle.id}')">Edit</button>
        <button class="delete" onclick="deleteVehicle('${vehicle.id}')">Delete</button>
        </div>
    `;
    vehicleList.appendChild(div);
    });
}

function saveToStorage() {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
}

vehicleForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("vehicleId").value;
    const newVehicle = {
    id: id || Date.now().toString(),
    vehicleName: document.getElementById("vehicleName").value,
    model: document.getElementById("model").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    desc: document.getElementById("desc").value,
    brand: document.getElementById("brand").value
    };

    if (id) {
    vehicles = vehicles.map(v => v.id === id ? newVehicle : v);
    } else {
    vehicles.push(newVehicle);
    }

    saveToStorage();
    renderVehicles();
    vehicleForm.reset();
    document.getElementById("vehicleId").value = "";
});

function editVehicle(id) {
        const v = vehicles.find(vehicle => vehicle.id === id);
    document.getElementById("vehicleId").value = v.id;
    document.getElementById("vehicleName").value = v.vehicleName;
    document.getElementById("model").value = v.model;
    document.getElementById("price").value = v.price;
    document.getElementById("image").value = v.image;
    document.getElementById("desc").value = v.desc;
    document.getElementById("brand").value = v.brand;
}

function deleteVehicle(id) {
    if (confirm("Are you sure you want to delete this vehicle?")) {
    vehicles = vehicles.filter(vehicle => vehicle.id !== id);
    saveToStorage();
    renderVehicles();
    }
}

renderVehicles();
