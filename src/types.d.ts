interface WakatimeData {
    color: string;
    decimal: string;
    digital: string;
    hours: number;
    minutes: number;
    name: string;
    percent: number;
    text: string;
    total_seconds: number;
}

interface WakatimeLangs {
    data: WakatimeData[];
}