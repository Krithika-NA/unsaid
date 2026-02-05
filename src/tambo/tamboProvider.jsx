import { TamboRegistryProvider } from "@tambo-ai/react";
import SoftDeadlineCard from "../tamboCards/SoftDeadlineCard";
import OwnershipRiskCard from "../tamboCards/OwnershipRiskCard";

export default function TamboProvider({ children }) {
  return (
    <TamboRegistryProvider
      components={[SoftDeadlineCard, OwnershipRiskCard]}
    >
      {children}
    </TamboRegistryProvider>
  );
}
