"use client";

import { useEffect, useState } from "react";

const useDeviceCheck = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth === 820 || window.innerWidth === 787) {
        setDevice("ipad");
      } else {
        setDevice("other");
      }
    };

    // Run once on mount
    checkDevice();

    // Listen for resize events
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return { device };
};

export default useDeviceCheck;
