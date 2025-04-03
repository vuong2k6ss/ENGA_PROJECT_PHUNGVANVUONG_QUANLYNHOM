const projects = [
    { id: 1, name: "Xây dựng website thương mại điện tử" },
    { id: 2, name: "Phát triển ứng dụng di động" },
    { id: 3, name: "Quản lý dữ liệu khách hàng" },
    { id: 4, name: "Xây dựng website thương mại điện tử" },
    { id: 5, name: "Phát triển ứng dụng di động" },
    { id: 6, name: "Quản lý dữ liệu khách hàng" },
    { id: 7, name: "Xây dựng website thương mại điện tử" },
    { id: 8, name: "Phát triển ứng dụng di động" },
    { id: 9, name: "Quản lý dữ liệu khách hàng" }
];

function renderProjects() {
    const tbody = document.querySelector("tbody"); 
    tbody.innerHTML = ""; 

    projects.forEach((project) => {
        const row = document.createElement("tr"); 

        const idCell = document.createElement("td");
        idCell.textContent = project.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = project.name;
        row.appendChild(nameCell);

        const actionCell = document.createElement("td");
        actionCell.innerHTML = `
            <button class="edit-btn">Sửa</button>
            <button class="delete-btn">Xóa</button>
            <button class="detail-btn">Chi tiết</button>
        `;
        row.appendChild(actionCell);

        tbody.appendChild(row);
    });
}

renderProjects();




const modal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.close');
  const saveBtn = document.querySelector('.save-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  const projectNameInput = document.getElementById('projectName');
  const errorName = document.getElementById('errorName');

  document.querySelector('.add-project-btn').addEventListener('click', () => modal.style.display = 'flex');
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  cancelBtn.addEventListener('click', () => modal.style.display = 'none');

  saveBtn.addEventListener('click', () => {
    const name = projectNameInput.value.trim();
    if (projects.some(project => project.name === name)) {
      errorName.style.display = 'block';
    } else {
      errorName.style.display = 'none';
      projects.push({ id: projects.length + 1, name });
      modal.style.display = 'none';
      renderProjects();
    }
  });








  document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử modal
    const projectModal = document.getElementById("projectModal");
    const deleteModal = document.getElementById("deleteModal");

    // Nút mở modal thêm/sửa dự án
    document.querySelector(".add-project-btn").addEventListener("click", function () {
        openModal(projectModal);
    });

    // Nút mở modal xác nhận xóa
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            openModal(deleteModal);
        });
    });

    // Nút đóng modal
    document.querySelectorAll(".close, .cancel-btn").forEach(button => {
        button.addEventListener("click", function () {
            closeModal(projectModal);
            closeModal(deleteModal);
        });
    });

    // Đóng modal khi click ra ngoài
    window.addEventListener("click", function (event) {
        if (event.target === projectModal) {
            closeModal(projectModal);
        }
        if (event.target === deleteModal) {
            closeModal(deleteModal);
        }
    });

    // Hàm mở modal
    function openModal(modal) {
        modal.classList.add("active");
    }

    // Hàm đóng modal
    function closeModal(modal) {
        modal.classList.remove("active");
    }
});
