import { Box } from "@chakra-ui/react";

export default function Pile({ Component, qty, x, y, size }) {
	if (Component == null) return null;
  return (
    <>
      {Array.from({ length: qty }).map((_, i) => (
        <Box
          key={i}
          position="absolute"
          left={x + i * 6}
          top={y + i * 4}
          // 회전도 고정(원하면 아주 미세하게 동일 값)
          transform="rotate(-3deg)"
          zIndex={10 + i}
          pointerEvents="none"
        >
          <Component size={size} />
        </Box>
      ))}
    </>
  );
}