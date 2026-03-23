import { useEffect, useState } from "react"

export function useModules() {
  const [modules, setModules] = useState([
    { name: "AI School", route: "/school", group: "learning", blueprint: "Education system" },
    { name: "Cognitive Lab", route: "/cognitive-lab", group: "cognitive", blueprint: "Mental training" },
    { name: "Execution Engine", route: "/execution", group: "execution", blueprint: "Goals and workflows" },
    { name: "Reality Simulation", route: "/simulation", group: "simulation", blueprint: "What-if analysis" },
    { name: "Infinite Creation", route: "/creation", group: "creation", blueprint: "Creative generation" },
    { name: "Founder Control", route: "/founder", group: "founder", blueprint: "Private founder tools" }
  ])

  useEffect(() => {
    // Placeholder hook for now.
    // Later this can fetch module registry from backend.
  }, [])

  return modules
}
