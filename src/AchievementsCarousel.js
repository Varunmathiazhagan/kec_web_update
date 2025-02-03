import { useState, useEffect } from "react"

const slides = [
  {
    image: "/images/custom2.jpg",
    title: "Outstanding Placement Achievement",
    description: "Rubrik Placement with 21 LPA Package",
  },
  {
    image: "/images/custom5.jpg",
    title: "KPIT Sparkle Award",
    description: "Winner of Most Popular Project Award - ₹1,00,000",
  },
  {
    image: "/images/custom3.jpg",
    title: "Placement Achievements 2024",
    description: "Multiple students placed in top companies with excellent packages",
  },
  {
    image: "/images/custom1.jpg",
    title: "Multiple Team Achievements",
    description: "Students securing various awards and recognition at national level",
  },
  {
    image: "/images/custom4.jpg",
    title: "HEXCORP Team Victory",
    description: "Winner of Smart India Hackathon Software Edition",
  },
]

function AchievementsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const carouselStyle = {
    section: {
      width: "100%",
      maxWidth: "1024px",
      margin: "0 auto",
      padding: "48px 16px",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "32px",
      color: "#003399",
    },
    carouselContainer: {
      position: "relative",
      width: "100%",
      height: "400px",
      overflow: "hidden",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    slide: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      transition: "opacity 700ms ease-in-out",
    },
    activeSlide: {
      opacity: 1,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    caption: {
      position: "absolute",
      bottom: "16px",
      left: "16px",
      right: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "16px",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "opacity 300ms ease-in-out",
    },
    captionHidden: {
      opacity: 0,
    },
    captionTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "4px",
      color: "#003399",
    },
    captionDescription: {
      fontSize: "0.875rem",
      color: "#4a5568",
    },
    pagination: {
      position: "absolute",
      bottom: "8px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "8px",
    },
    paginationDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#CBD5E0",
      transition: "all 300ms ease-in-out",
      cursor: "pointer",
    },
    activeDot: {
      width: "16px",
      backgroundColor: "#003399",
    },
  }

  return (
    <section style={carouselStyle.section}>
      <h2 style={carouselStyle.heading}>Highlights</h2>
      <div
        style={carouselStyle.carouselContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              ...carouselStyle.slide,
              ...(index === currentSlide ? carouselStyle.activeSlide : {}),
            }}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} style={carouselStyle.image} />
          </div>
        ))}

        <div
          style={{
            ...carouselStyle.caption,
            ...(isHovered ? carouselStyle.captionHidden : {}),
          }}
        >
          <h3 style={carouselStyle.captionTitle}>{slides[currentSlide].title}</h3>
          <p style={carouselStyle.captionDescription}>{slides[currentSlide].description}</p>
        </div>

        <div
          style={{
            ...carouselStyle.pagination,
            ...(isHovered ? carouselStyle.captionHidden : {}),
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                ...carouselStyle.paginationDot,
                ...(index === currentSlide ? carouselStyle.activeDot : {}),
              }}
            >
              <span style={{ display: "none" }}>Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsCarousel