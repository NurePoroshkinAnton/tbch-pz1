export function randInt(min: number, max: number): number {
    if (min < 0 || max < 0 || min > max) {
        throw new Error(
            "Invalid range. Ensure min and max are positive and min <= max."
        )
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
}

