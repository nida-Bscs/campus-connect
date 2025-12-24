function searchNotices() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let notices = document.getElementsByClassName("notice");

    for (let i = 0; i < notices.length; i++) {
        let text = notices[i].innerText.toLowerCase();

        if (text.includes(input)) {
            notices[i].style.display = "";
        } else {
            notices[i].style.display = "none";
        }
    }
}
function login() {
    let role = document.getElementById("role").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (role === "" || username === "" || password === "") {
        error.innerText = "Please fill all fields";
        return;
    }

    if (role === "faculty" && username === "faculty" && password === "12345") {
        localStorage.setItem("userRole", "faculty");
        window.location.href = "announcements.html";
    }
    else if (role === "student" && username === "student" && password === "12345") {
        localStorage.setItem("userRole", "student");
        window.location.href = "announcements.html";
    }
    else {
        error.innerText = "Invalid login credentials";
    }
}
function uploadNotice() {
    let title = document.getElementById("noticeTitle").value;
    let fileInput = document.getElementById("noticeFile");
    let file = fileInput.files[0];

    if (title === "" || !file) {
        alert("Please enter title and select a file");
        return;
    }

    let noticeDiv = document.createElement("div");
    noticeDiv.className = "notice fade-in";

    noticeDiv.innerHTML = `
        <h3>${title}</h3>
        <p>
            <a href="${URL.createObjectURL(file)}" download>
                Download Notice
            </a>
        </p>
        <button class="delete-btn" onclick="deleteNotice(this)">Delete</button>
    `;

    document.getElementById("uploadedNotices").appendChild(noticeDiv);

    // Clear inputs
    document.getElementById("noticeTitle").value = "";
    fileInput.value = "";
}
function deleteNotice(button) {
    button.parentElement.remove();
}
