"use client";

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { User, MessageCircle, Plus, ChevronRight } from "lucide-react";
import Article1 from "../assets/Article.jpg";
import Article2 from "../assets/Article2.jpg";
import Article3 from "../assets/Article3.jpg";

export default function Article() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: t("article.post1Title"),
      image: Article1,
      author: t("article.author"),
      comments: 3,
    },
    {
      id: 2,
      title: t("article.post2Title"),
      image: Article2,
      author: t("article.author"),
      comments: 3,
    },
    {
      id: 3,
      title: t("article.post3Title"),
      image: Article3,
      author: t("article.author"),
      comments: 3,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-orange-400 w-12"></div>
            <span className="text-orange-400 text-sm font-medium tracking-wider">
              {t("article.label")}
            </span>
            <div className="h-px bg-orange-400 w-12"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            {t("article.heading")}
          </h2>
          <p className="text-xl text-gray-600 mt-2">{t("article.subtitle")}</p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="group cursor-pointer relative pb-16"
              onHoverStart={() => setHoveredCard(post.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay with plus icon */}
                <AnimatePresence>
                  {hoveredCard === post.id && (
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <Plus className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-70" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Card */}
              <motion.div
                animate={{
                  backgroundColor:
                    hoveredCard === post.id ? "#1f2937" : "#ffffff",
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 rounded-lg shadow-lg border-2 border-white overflow-hidden z-20"
                style={{ bottom: "2rem" }}
              >
                <motion.div
                  animate={{
                    height: hoveredCard === post.id ? "auto" : "120px",
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="p-5">
                    {/* Author and Comments */}
                    <motion.div
                      className="flex items-center gap-4 text-sm mb-3"
                      animate={{
                        color: hoveredCard === post.id ? "#d1d5db" : "#6b7280",
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <User
                          className={`w-4 h-4 ${hoveredCard === post.id ? "text-orange-400" : ""}`}
                        />
                        <span>
                          {t("article.by")} {post.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle
                          className={`w-4 h-4 ${hoveredCard === post.id ? "text-orange-400" : ""}`}
                        />
                        <span>
                          {t("article.comments")} ({post.comments})
                        </span>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-1 h-12 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                      <motion.h3
                        className="text-lg font-bold leading-tight"
                        animate={{
                          color:
                            hoveredCard === post.id ? "#ffffff" : "#111827",
                        }}
                      >
                        {post.title}
                      </motion.h3>
                    </div>

                    {/* Read More Button */}
                    <AnimatePresence>
                      {hoveredCard === post.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-medium flex items-center gap-2 transition-colors"
                          >
                            <span>{t("article.readMore")}</span>
                            <ChevronRight className="w-4 h-4" />
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
