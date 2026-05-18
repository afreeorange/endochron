import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PiQuotesDuotone } from "react-icons/pi";
import { fadeAnim } from "./animations";

export const TranscriptBlock = ({
  transcript,
  onSave,
  animKey,
  label = "AI transcription. Tap to edit.",
  showQuote = true,
  className,
  collapseLines,
  textClassName,
}: {
  transcript: string | null;
  onSave: (text: string) => void;
  animKey?: string;
  label?: string;
  showQuote?: boolean;
  className?: string;
  collapseLines?: number;
  textClassName?: string;
}) => {
  const [editing, setEditing] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Reset collapse when the content key changes (e.g. switching ranges).
  useEffect(() => {
    setExpanded(false);
  }, [animKey]);

  if (!transcript) return null;

  function startEdit() {
    setEditing(true);
    setTimeout(() => textareaRef.current?.focus(), 0);
  }

  function handleTap() {
    if (collapseLines && !expanded) setExpanded(true);
    else startEdit();
  }

  function confirm() {
    const val = textareaRef.current?.value ?? transcript ?? "";
    onSave(val);
    setEditing(false);
  }

  const clampStyle =
    collapseLines && !expanded
      ? {
          display: "-webkit-box",
          WebkitLineClamp: collapseLines,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        }
      : undefined;

  const effectiveLabel = collapseLines
    ? expanded
      ? "Tap to edit"
      : "Tap to read more"
    : label;

  return (
    <div className={clsx("flex items-start gap-2 mb-0", className)}>
      {showQuote && <PiQuotesDuotone className="text-lg rotate-180 shrink-0" />}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {editing ? (
            <motion.div key="edit" {...fadeAnim}>
              <textarea
                ref={textareaRef}
                defaultValue={transcript}
                className={clsx(
                  "rounded-md w-full textarea textarea-bordered",
                  textClassName,
                )}
                rows={5}
              />
              <div className="grid grid-cols-2 mt-2 join">
                <button
                  className="btn btn-sm btn-primary join-item"
                  onClick={confirm}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm join-item"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={animKey ? `view-${animKey}` : "view"}
              {...fadeAnim}
            >
              {collapseLines && expanded && (
                <button
                  type="button"
                  aria-label="Collapse"
                  className="float-right mb-2 ml-2 btn btn-xl btn-circle"
                  onClick={() => setExpanded(false)}
                >
                  ✕
                </button>
              )}
              <div
                className={clsx("cursor-pointer", textClassName)}
                style={clampStyle}
                onClick={handleTap}
              >
                {transcript}
              </div>
              {effectiveLabel && (
                <p className="opacity-25 mt-1 text-xs">{effectiveLabel}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
