import { z } from 'zod';

// ==========================================
// 1. SYSTEM ENUMS (Future-proofed for Stripe)
// ==========================================
export const NodeStatusSchema = z.enum(['active', 'ghost']);

// STRIPE READY: We use this to lock/unlock UI features
export const FeatureTierSchema = z.enum(['free', 'pro', 'enterprise']); 

export const EdgeFlowTypeSchema = z.enum([
  'capital', 'physical', 'digital', 'labor', 'information'
]);

export const NodeTypeSchema = z.enum([
  'supplier', 'manufacturer', 'warehouse', 'logistics', 
  'marketing', 'customer', 'revenue', 'automation', 
  'sustainability', 'tax_optimization', 'waste_utilization', 'custom'
]);

// ==========================================
// 2. FINANCIAL & STRATEGIC METRICS
// ==========================================
export const UnitEconomicsSchema = z.object({
  monthlyCost: z.number().nonnegative(),
  monthlyRevenue: z.number().nonnegative(),
  margin: z.number().optional(),
  riskScore: z.number().min(0).max(10),
  efficiencyRating: z.number().min(0).max(100),
});

export const MasterInsightsSchema = z.object({
  automationOpportunity: z.string().optional(),
  wasteMonetization: z.string().optional(),
  failureWarning: z.string().optional(),
  taxStrategy: z.string().optional(),
});

// ==========================================
// 3. NODE & EDGE DATA STRUCTURES
// ==========================================
export const OperationNodeDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: NodeStatusSchema,
  tierRequired: FeatureTierSchema,
  isSelected: z.boolean().default(false),
  metrics: UnitEconomicsSchema.optional(),
  insights: MasterInsightsSchema.optional(),
});

export const OperationNodeSchema = z.object({
  id: z.string(),
  type: NodeTypeSchema,
  position: z.object({ 
    x: z.number(), 
    y: z.number() 
  }),
  data: OperationNodeDataSchema,
});

export const OperationEdgeSchema = z.object({
  id: z.string(),
  source: z.string(),
  target: z.string(),
  label: z.string().optional(),
  animated: z.boolean().optional(),
  type: z.enum(['default', 'smoothstep', 'straight', 'bezier']).optional(),
  data: z.object({
    flowType: EdgeFlowTypeSchema,
    flowVolume: z.number().optional(),
    isBottleneck: z.boolean().default(false),
  }).optional(),
});

// ==========================================
// 4. THE MASTER GRAPH (Saved Project)
// ==========================================
export const OperationGraphSchema = z.object({
  schemaVersion: z.string().default("1.0.0"), // Future-proofs local storage migrations
  projectId: z.string(),
  projectName: z.string(),
  createdAt: z.string().datetime(), // Enforces strict ISO dates
  updatedAt: z.string().datetime(),
  
  region: z.string(),
  flexibilityScore: z.number().min(0).max(10),
  
  toggles: z.object({
    unitEconomicsActive: z.boolean(),
    sustainabilityActive: z.boolean(),
  }),
  
  nodes: z.array(OperationNodeSchema),
  edges: z.array(OperationEdgeSchema),
});
