import React from 'react';
import { Handle, Position } from 'reactflow';
import { Lock, Target, Plus } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper to merge Tailwind classes cleanly
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function OperationNode({ data, id }: any) {
  const isGhost = data.status === 'ghost';
  // Simulate Stripe check: if node needs 'pro', lock it (we'll assume free tier for now)
  const isLocked = data.tierRequired === 'pro'; 
  const hasMetrics = !!data.metrics;

  return (
    <div className={cn(
      "relative min-w-[280px] max-w-[320px] rounded-xl border p-4 backdrop-blur-glass transition-all duration-300",
      isGhost ? "bg-operation-ghost border-operation-border/50 border-dashed" : "bg-operation-panel border-operation-border shadow-xl",
      data.isSelected ? "ring-2 ring-operation-accent shadow-[0_0_20px_rgba(59,130,246,0.2)]" : ""
    )}>
      
      {/* Top Connection Point */}
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-gray-600 border-2 border-operation-dark" />

      {/* Header Area */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          {isLocked ? (
            <Lock size={14} className="text-gray-500" />
          ) : (
            <div className={cn("w-2 h-2 rounded-full", isGhost ? "bg-gray-600" : "bg-operation-accent")} />
          )}
          <h3 className={cn("font-bold text-sm tracking-wide", isGhost ? "text-gray-400" : "text-white")}>
            {data.title}
          </h3>
        </div>

        {/* @Mention Target Button */}
        <button 
          className={cn(
            "p-1.5 rounded-lg transition-colors cursor-pointer z-10",
            data.isSelected ? "bg-operation-accent text-white" : "bg-operation-dark border border-operation-border text-gray-400 hover:text-white"
          )}
          title="Target node for @mention edit"
        >
          <Target size={14} />
        </button>
      </div>

      {/* Main Paragraph */}
      <p className={cn("text-xs leading-relaxed", isGhost ? "text-gray-500" : "text-gray-400")}>
        {isLocked ? "Upgrade to Pro to view operational mechanics, hidden costs, and automation strategies." : data.description}
      </p>

      {/* Unit Economics Dropdown (Appears only if Toggle is ON and Data exists) */}
      {hasMetrics && !isLocked && (
        <div className="mt-4 pt-3 border-t border-operation-border flex justify-between items-center">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 block mb-0.5">Monthly Cost</span>
            <span className="text-sm text-white font-mono">${data.metrics.monthlyCost.toLocaleString()}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 block mb-0.5">Risk Score</span>
            <span className={cn(
              "text-sm font-mono font-bold",
              data.metrics.riskScore > 7 ? "text-operation-danger" : "text-emerald-400"
            )}>
              {data.metrics.riskScore}/10
            </span>
          </div>
        </div>
      )}

      {/* Ghost Node Reject Button (Top Right Floating) */}
      {isGhost && (
        <button className="absolute -top-3 -right-3 bg-operation-dark border border-operation-border text-gray-400 hover:text-operation-danger rounded-full p-1.5 shadow-lg transition-colors z-10">
          <Plus size={14} className="rotate-45" />
        </button>
      )}

      {/* Bottom Connection Point */}
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-operation-accent border-2 border-operation-dark" />
    </div>
  );
}
