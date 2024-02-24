export interface TooltipProps {
  children: React.ReactNode; // Elemen yang akan dibungkus oleh Tooltip
  text: string; // Teks yang ditampilkan di dalam Tooltip
  position?: 'top' | 'right' | 'bottom' | 'left'; // Posisi Tooltip relatif terhadap children
}