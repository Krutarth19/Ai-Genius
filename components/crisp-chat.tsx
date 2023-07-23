"use client";

import { useEffect } from "react";

import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5a79216c-edd0-4d30-ae4b-49b05d438ac8");
  }, []);
  return null;
};

