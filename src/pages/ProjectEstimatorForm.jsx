import { useEffect, useState } from "react";
import { z } from "zod";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/Select";
import { db } from "../db/firebase";
import { collection, addDoc } from "firebase/firestore";

const formSchema = z.object({
  projectGoal: z.string().min(1, "Project goal is required"),
  projectComplexity: z.string().min(1, "Project complexity is required"),
  devPath: z.string().optional(),
  techSuite: z.string().optional(),
  designStage: z.string().optional(),
  fullname: z.string().min(1, "Full name is required"),
  businessEmail: z
    .string()
    .email("Invalid email address")
    .min(1, "Business email is required"),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(11, "Contact number must not exceed 11 digits"),
});

const projectGoals = [
  "Discovery (2-3 weeks)",
  "Clickable Prototype (2-3 weeks)",
  "Proof of Concept (PoC) (1.5-2 months)",
  "Minimum Viable Product (MVP) (3-4 months)",
  "Complete Solution (4+ months)",
];

const projectComplexities = [
  "Simple Website",
  "Web or Mobile App with 3+ Features",
  "Complex Digital Solution",
  "Highly Complex Platform (like SAP or Netflix)",
];

const devPath = [
  "Mobile App Only",
  "Web App Only",
  "Design Only",
  "Mobile & Web",
];

const techSuite = ["Custom code", "No-Code", "Not Sure"];

const designStage = [
  "We Need a Design",
  "We Already Have a Design",
  "We Have some Sketches",
];

export default function ProjectEstimatorForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    devPath: "",
    techSuite: "",
    designStage: "",
    projectGoal: "",
    projectComplexity: "",
    fullname: "",
    businessEmail: "",
    contactNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const costMapping = {
    projectGoal: {
      "Discovery (2-3 weeks)": 1000,
      "Clickable Prototype (2-3 weeks)": 1500,
      "Proof of Concept (PoC) (1.5-2 months)": 3000,
      "Minimum Viable Product (MVP) (3-4 months)": 5000,
      "Complete Solution (4+ months)": 10000,
    },
    projectComplexity: {
      "Simple Website": 500,
      "Web or Mobile App with 3+ Features": 2000,
      "Complex Digital Solution": 5000,
      "Highly Complex Platform (like SAP or Netflix)": 10000,
    },
    devPath: {
      "Mobile App Only": 1500,
      "Web App Only": 1000,
      "Mobile & Web": 3000,
      "Not Sure": 100,
    },
    techSuite: {
      "Custom code": 3000,
      "No-Code": 1000,
      "Not Sure": 100,
    },
    designStage: {
      "We Need a Design": 2000,
      "We Already Have a Design": 1500,
      "We Have some Sketches": 1000,
      "Not Sure": 100,
    },
  };

  const calculateCost = () => {
    let cost = 0;
    cost += costMapping.projectGoal[formData.projectGoal || 0] ;
    cost += costMapping.projectComplexity[formData.projectComplexity] || 0;
    cost += costMapping.devPath[formData.devPath] || 0;
    cost += costMapping.techSuite[formData.techSuite] || 0;
    cost += costMapping.designStage[formData.designStage] || 0;
    setTotalCost(cost);
  };

  useEffect(() => {
    if(step === 1){
      calculateCost();
      if (step === 2) {
        calculateCost();
      }
    }
  }, [step, formData]);

  const validateStep = (currentStep) => {
    const currentErrors = {};
    if (currentStep === 1 && !formData.projectGoal) {
      currentErrors.projectGoal = "Project goal is required";
    }
    if (currentStep === 1 && !formData.projectComplexity) {
      currentErrors.projectComplexity = "Project complexity is required";
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (
        step === 1 &&
        formData.projectGoal === "Discovery (2-3 weeks)" ||
          formData.projectGoal === "Clickable Prototype (2-3 weeks)"
      ) {
        setStep(3);
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    if (step === 3) {
      if (
        formData.projectGoal === "Discovery (2-3 weeks)" ||
        formData.projectGoal === "Clickable Prototype (2-3 weeks)"
      ) {
        setStep(1);
      } else {
        setStep(2);
      }
    } else if (step === 2) {
      setStep(1);
    }
  };

  const handleRecalculate = () => {
    setFormData({
      devPath: "",
      techSuite: "",
      designStage: "",
      projectGoal: "",
      projectComplexity: "",
      fullname: "",
      businessEmail: "",
      contactNumber: "",
    });
    setTotalCost(0);
    setStep(1);
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validatedData = formSchema.parse(formData);
      const sendData = { ...validatedData, totalCost, };
      await addDoc(collection(db, "bizfy-data"), sendData);
      alert("Form submitted successfully!");
      setFormData({
        devPath: "",
        techSuite: "",
        designStage: "",
        projectGoal: "",
        projectComplexity: "",
        fullname: "",
        businessEmail: "",
        contactNumber: "",
      });
      setTotalCost(0);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Please Fill all Fields Properly!");
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6 flex flex-col items-center justify-center rounded-lg bg-transparent">
        <h1 className="text-3xl font-bold text-blue-600">Thank You!</h1>
        <p className="text-xl mt-4">We’ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl p-6 space-y-8 text-white rounded-lg bg-transparent sm:w-[90%]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Get a plan tailored to your needs
        </h1>
        <span className="text-xl font-semibold hidden sm:block">{step}/3</span>
      </div>
      <p className="text-gray-400">Fields marked with * are mandatory</p>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 text-black overflow-hidden w-full"
      >
        {step === 1 && (
          <div className="space-y-3 flex flex-col w-full">
            <Select
              value={formData.projectGoal}
              onValueChange={(value) =>
                setFormData({ ...formData, projectGoal: value })
              }
            >
              <SelectTrigger>
                <SelectValue
                  value={formData.projectGoal}
                  placeholder="Choose your project's goal *"
                />
              </SelectTrigger>
              <SelectContent className={" overflow-hidden"}>
                {projectGoals.map((goal) => (
                  <SelectItem key={goal} value={goal}>
                    {goal}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.projectGoal && (
              <p className="text-red-500">{errors.projectGoal}</p>
            )}
            <Select
              value={formData.projectComplexity}
              onValueChange={(value) =>
                setFormData({ ...formData, projectComplexity: value })
              }
            >
              <SelectTrigger>
                <SelectValue
                  value={formData.projectComplexity}
                  placeholder="Rate the complexity of your project *"
                />
              </SelectTrigger>
              <SelectContent>
                {projectComplexities.map((complexity) => (
                  <SelectItem key={complexity} value={complexity}>
                    {complexity}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.projectComplexity && (
              <p className="text-red-500">{errors.projectComplexity}</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3 ">
            <Select
              value={formData.devPath}
              onValueChange={(value) =>
                setFormData({ ...formData, devPath: value })
              }
            >
              <SelectTrigger>
                <SelectValue
                  value={formData.devPath}
                  placeholder="What's your project development path?"
                />
              </SelectTrigger>
              <SelectContent className="">
                {devPath.map((path) => (
                  <SelectItem key={path} value={path}>
                    {path}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.devPath && <p className="text-red-500">{errors.devPath}</p>}

            <Select
              value={formData.techSuite}
              onValueChange={(value) =>
                setFormData({ ...formData, techSuite: value })
              }
            >
              <SelectTrigger>
                <SelectValue
                  value={formData.techSuite}
                  placeholder="Which technology framework suit your project?"
                />
              </SelectTrigger>

              <SelectContent className="w-1/3">
                {techSuite.map((suite) => (
                  <SelectItem key={suite} value={suite}>
                    {suite}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.techSuite && (
              <p className="text-red-500">{errors.techSuite}</p>
            )}

            <Select
              value={formData.designStage}
              onValueChange={(value) =>
                setFormData({ ...formData, designStage: value })
              }
            >
              <SelectTrigger>
                <SelectValue
                  value={formData.designStage}
                  placeholder="What's your current design stage?"
                />
              </SelectTrigger>

              <SelectContent className="w-1/3">
                {designStage.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.designStage && (
              <p className="text-red-500">{errors.designStage}</p>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 flex flex-col w-full">
          <p className="text-xl text-white font-semibold">
              Total estimated cost:{" "}
              <span className="text-green-500">${totalCost}</span>
            </p>
            <Input
              placeholder="Full Name *"
              value={formData.fullname}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
            />
            {errors.fullname && (
              <p className="text-red-500">{errors.fullname}</p>
            )}
            <Input
              placeholder="Business Email *"
              value={formData.businessEmail}
              onChange={(e) =>
                setFormData({ ...formData, businessEmail: e.target.value })
              }
            />
            {errors.businessEmail && (
              <p className="text-red-500">{errors.businessEmail}</p>
            )}
            <Input
              placeholder="Contact Number *"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({ ...formData, contactNumber: e.target.value })
              }
            />
            {errors.contactNumber && (
              <p className="text-red-500">{errors.contactNumber}</p>
            )}
          </div>
        )}

        <div className="flex justify-between items-center">
          {step > 1 && (
            <Button
              type="button"
              onClick={handleBack}
              className={"border bg-transparent hover:border-red-700"}
            >
              Go Back
            </Button>
          )}
          {step === 3 && (
            <Button onClick={handleRecalculate} variant="outline" className={"border bg-transparent hover:border-blue-700"}>
              Recalculate
            </Button>
          )}
          <Button
            type="button"
            className={"hover:border-green-700"}
            onClick={step === 3 ? handleSubmit : handleNext}
          >
            {step === 3 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
}