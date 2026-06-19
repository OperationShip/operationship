import { z } from 'zod';
import * as schemas from './schemas';

// 1. Export the Zod Schemas (Used by the API to validate AI output)
export * from './schemas';

// 2. Export the TypeScript Interfaces (Used by the React Frontend for autocompletion)
export type NodeStatus = z.infer<typeof schemas.NodeStatusSchema>;
export type FeatureTier = z.infer<typeof schemas.FeatureTierSchema>;
export type EdgeFlowType = z.infer<typeof schemas.EdgeFlowTypeSchema>;
export type NodeType = z.infer<typeof schemas.NodeTypeSchema>;

export type UnitEconomics = z.infer<typeof schemas.UnitEconomicsSchema>;
export type MasterInsights = z.infer<typeof schemas.MasterInsightsSchema>;

export type OperationNodeData = z.infer<typeof schemas.OperationNodeDataSchema>;
export type OperationNode = z.infer<typeof schemas.OperationNodeSchema>;
export type OperationEdge = z.infer<typeof schemas.OperationEdgeSchema>;
export type OperationGraph = z.infer<typeof schemas.OperationGraphSchema>;
