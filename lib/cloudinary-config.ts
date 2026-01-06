/**
 * Cloudinary Video Compression Presets
 * Use these presets based on your compression needs
 */

export const VIDEO_COMPRESSION_PRESETS = {
  // Minimal compression - highest quality (10-20% reduction)
  high_quality: {
    quality: "80",
    video_codec: "h264",
    audio_codec: "aac",
    bit_rate: "2m", // 2 megabits per second
  },

  // Balanced compression - good quality (40-60% reduction)
  balanced: {
    quality: "60",
    video_codec: "h264",
    audio_codec: "aac",
    bit_rate: "1m", // 1 megabit per second
  },

  // Aggressive compression - smaller files (60-80% reduction)
  high_compression: {
    quality: "40",
    video_codec: "h264",
    audio_codec: "aac",
    bit_rate: "500k", // 500 kilobits per second
  },

  // Maximum compression - smallest files (80%+ reduction)
  maximum_compression: {
    quality: "30",
    video_codec: "h264",
    audio_codec: "aac",
    bit_rate: "300k", // 300 kilobits per second
  },

  // Auto with constraints - better than plain "auto" (30-50% reduction)
  auto_optimized: {
    quality: "auto:eco", // Cloudinary's eco mode for auto
    video_codec: "h264",
    audio_codec: "aac",
    bit_rate: "1m",
  },
} as const;

export type CompressionPreset = keyof typeof VIDEO_COMPRESSION_PRESETS;

/**
 * Get transformation settings for a given preset
 */
export function getCompressionSettings(preset: CompressionPreset = "balanced") {
  return {
    ...VIDEO_COMPRESSION_PRESETS[preset],
    fetch_format: "mp4",
  };
}

/**
 * Estimate compression percentage based on preset
 */
export function getEstimatedCompression(preset: CompressionPreset): string {
  const estimates = {
    high_quality: "10-20%",
    balanced: "40-60%",
    high_compression: "60-80%",
    maximum_compression: "80%+",
    auto_optimized: "30-50%",
  };
  return estimates[preset];
}
