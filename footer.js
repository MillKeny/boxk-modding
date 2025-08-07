document.write(`
    <script>
        document.querySelectorAll('.clickable-image').forEach(img => {
            img.addEventListener('click', function () {
                const modal = document.getElementById("image-modal");
                const modalImg = document.getElementById("modal-img");
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        document.querySelector(".close-btn").addEventListener('click', function () {
            document.getElementById("image-modal").style.display = "none";
        });

        document.getElementById("image-modal").addEventListener('click', function (e) {
            if (e.target === this) {
                this.style.display = "none";
            }
        });
    </script>

    <footer class="dark-footer">
        <div class="container">
            <div class="social-icons">
                <a href="https://www.youtube.com/@բողկ", target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://discord.gg/3ajuQbwzKN", target="_blank"><i class="fab fa-discord"></i></a>
                <a href="https://t.me/boxk_chat", target="_blank"><i class="fab fa-telegram"></i></a>
            </div>
            <div class="copyright">
                <p>&copy; 2025 BOXK Modding. All mods are for games that we don't own.</p>
            </div>
        </div>
    </footer>
`)