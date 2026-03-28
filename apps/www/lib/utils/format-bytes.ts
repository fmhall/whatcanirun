const formatBytes = (bytes: number, decimals = 1) => {
  if (bytes < 1_024) return `${bytes} B`;
  if (bytes < 1_048_576) return `${(bytes / 1_024).toFixed(decimals)} KB`;
  if (bytes < 1_073_741_824) return `${(bytes / 1_048_576).toFixed(decimals)} MB`;
  if (bytes < 1_099_511_627_776) return `${(bytes / 1_073_741_824).toFixed(decimals)} GB`;
  return `${(bytes / 1_099_511_627_776).toFixed(decimals)} TB`;
};

export default formatBytes;
