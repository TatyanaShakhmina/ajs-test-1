import { getHealthStatus } from '../index.js';

test('"healthy" for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('"wounded" for 15 <= health <= 50', () => {
    expect(getHealthStatus({ name: 'Tim', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Boy', health: 15 })).toBe('wounded');
});

test('"critical" for health < 15', () => {
    expect(getHealthStatus({ name: 'Artur', health: 10 })).toBe('critical');
});