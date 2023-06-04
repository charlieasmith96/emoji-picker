import { Input } from 'baseui/input';

interface FancyInputProps {
  placeholder: string;
}

function FancyInput({ placeholder }: FancyInputProps) {
  return (
    <Input placeholder={placeholder} />
  );
}

export { FancyInput };
