export function gradeCalculator(score) {
  if (score === null || score === undefined || isNaN(score)) {
    return {
      grade: "Invalid",
      label: "No Score",
      color: "text-gray-500 bg-gray-100 border-gray-200",
      message: "Score not available."
    };
  }

  if (score >= 85) {
    return {
      grade: "A",
      label: "Excellent",
      color: "text-green-600 bg-green-50 border-green-200",
      message: "Outstanding performance! Your content is highly optimized."
    };
  }

  if (score >= 70) {
    return {
      grade: "B",
      label: "Good",
      color: "text-blue-600 bg-blue-50 border-blue-200",
      message: "Good engagement potential. Minor improvements can boost performance."
    };
  }

  if (score >= 50) {
    return {
      grade: "C",
      label: "Average",
      color: "text-yellow-600 bg-yellow-50 border-yellow-200",
      message: "Your content is decent but needs optimization."
    };
  }

  if (score >= 30) {
    return {
      grade: "D",
      label: "Needs Improvement",
      color: "text-orange-600 bg-orange-50 border-orange-200",
      message: "Your content needs refinement for better engagement."
    };
  }

  return {
    grade: "F",
    label: "Poor",
    color: "text-red-600 bg-red-50 border-red-200",
    message: "Low engagement score. Significant improvements recommended."
  };
}
