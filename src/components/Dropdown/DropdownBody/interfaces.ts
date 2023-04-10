export interface DropdownBodyProps {
    children? : string;
    size? : 'small' | 'medium'
    color? : string
    background? : string
    border? : string
}

export interface Cssprops {
    size? : 'small' | 'medium'
    color? : string
    background? : string
    border? : string
}

export interface Sizes { 
    [key: string]: {
        width: string;
        height: string;
      };
}

