import crypto from 'node:crypto'

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: string, password: string) => {
    return crypto
        .createHmac('sha256', [salt, password].join('/'))
        .update(process.env.SECRET_CRYPTO_KEY as string)
        .digest('hex')
}
