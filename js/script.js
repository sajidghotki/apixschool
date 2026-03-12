 /* HAMBURGER */

        const hamburger = document.querySelector(".hamburger")
        const nav = document.querySelector(".nav-links")

        hamburger.onclick = () => {
            nav.classList.toggle("active")
        }

        /* COUNTER */

        document.querySelectorAll(".counter").forEach(counter => {

            const target = +counter.dataset.target
            let count = 0

            const update = () => {

                count += target / 200

                if (count < target) {
                    counter.innerText = Math.ceil(count)
                    requestAnimationFrame(update)
                } else {
                    counter.innerText = target
                }

            }

            update()

        })

        /* TESTIMONIAL */

        const testimonials = [
            "Excellent teachers and environment.",
            "My child loves studying here.",
            "Highly recommended school."
        ]

        let t = 0

        function testimonialSlider() {

            document.getElementById("testimonial-text").innerText = testimonials[t]

            t++
            if (t >= testimonials.length) t = 0

        }

        testimonialSlider()
        setInterval(testimonialSlider, 4000)

        /* SCROLL TOP */

        const scrollBtn = document.getElementById("scrollTop")

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                scrollBtn.style.display = "block"
            } else {
                scrollBtn.style.display = "none"
            }

        })

        scrollBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }